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
    $('#listIcon').removeClass('active');
    $('#gridIcon').addClass('active');
  };

  const changeToListView = () => {
    $('#listView').removeClass('hidden');
    $('#gridView').addClass('hidden');
    $('#gridIcon').removeClass('active');
    $('#listIcon').addClass('active');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <ProfileHeader
          name={`${user.firstName} ${user.lastName}`}
          logo={`${user.firstName[0]}${user.lastName[0]}`}
          email={user.email}
        /> <br />
        <div className="row">
          <div className="col--s-1-of-2 col--1-of-2 col">
            <h2>My events</h2>
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
