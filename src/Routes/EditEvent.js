import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleDeleteEvent } from '../Actions/events_action';
import Navbar from '../Components/Navbar';
import FetchEventInfo from '../Components/FetchEventInfo';
import EditEventForm from '../Components/EditEventForm';

const EditEvent = ({ user, events, handleDeleteEvent }) => (
  <div>
    <Navbar />
    <div className="container">
      <FetchEventInfo />
      <div className="row">
        <div className="col-xs-6">
          <span>DETAIL EVENT: #{events.specificEvent.id}</span>
        </div>
        <div className="col-xs-6 right-align">
          <button onClick={() => handleDeleteEvent(events.specificEvent.id)}>DELETE</button>
        </div>
      </div>
      {events.specificEvent.id === window.location.pathname.slice(
        window.location.pathname.indexOf('+') + 1) ?
          <EditEventForm />
        : <h1>Loading...</h1>}
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    user: state.user,
    events: state.events,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleDeleteEvent,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EditEvent);
