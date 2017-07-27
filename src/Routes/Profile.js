import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleUnattendEvent } from '../Actions/events_action';
import Navbar from '../Components/Navbar';
import ProfileHeader from '../Containers/ProfileHeader';
import ChangeViewTab from '../Containers/ChangeViewTab';
import GridView from '../Containers/GridView';
import ListView from '../Containers/ListView';


const Profile = ({ user, events, handleUnattendEvent }) => {
  const changeToGridView = () => {
    $('#gridView').removeClass('hidden');
    $('#listView').addClass('hidden');
  };

  const changeToListView = () => {
    $('#listView').removeClass('hidden');
    $('#gridView').addClass('hidden');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <ProfileHeader
          name={`${user.firstName} ${user.lastName}`}
          logo={`${user.firstName[0]}${user.lastName[0]}`}
          email={user.email}
        />
        <div className="row">
          <div className="col-xs-6">
            <h1>My events:</h1>
          </div>
          <ChangeViewTab
            changeToGridView={changeToGridView}
            changeToListView={changeToListView}
          />
        </div>
        <div id="gridView">
          <GridView
            allEvents={events.allEvents.filter(el => el.status !== 'not attending')}
            handleUnattendEvent={handleUnattendEvent}
            user={{
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              id: user.id,
            }}
          />
        </div>
        <div id="listView" className="hidden">
          <ListView
            allEvents={events.allEvents.filter(el => el.status !== 'not attending')}
            handleUnattendEvent={handleUnattendEvent}
            user={{
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              id: user.id,
            }}
          />
        </div>
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    user: state.user,
    events: state.events,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleUnattendEvent,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
