import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleAttendEvent, handleUnattendEvent } from '../Actions/events_action';
import Navbar from '../Components/Navbar';
import FetchEventInfo from '../Components/FetchEventInfo';
import DisplayEventInfo from '../Containers/DisplayEventInfo';
import FloatingAddButton from '../Containers/FloatingAddButton';

const EventPreview = ({ user, events, handleAttendEvent, handleUnattendEvent }) => (
  <div>
    <Navbar displayBack />
    <div className="container">
      <FetchEventInfo />
      <span style={{ color: '#989898', fontSize: '14px', fontWeight: '700' }}>
        DETAIL EVENT: #{events.specificEvent.id}
      </span>
      {events.specificEvent.id ?
        <DisplayEventInfo
          eventId={events.specificEvent.id}
          id={user.id}
          date={`${events.specificEvent.createdAt.slice(0, events.specificEvent.createdAt.indexOf('T'))}, 
          ${events.specificEvent.createdAt.slice(events.specificEvent.createdAt.indexOf('T') + 1, events.specificEvent.createdAt.indexOf('T') + 6)}`}
          title={events.specificEvent.title}
          owner={`${events.specificEvent.owner.firstName} 
            ${events.specificEvent.owner.lastName}`}
          description={events.specificEvent.description}
          attendees={`${events.specificEvent.attendees.length} of 
            ${events.specificEvent.capacity}`}
          attendeesList={events.specificEvent.attendees}
          status={events.specificEvent.status}

          handleAttendEvent={handleAttendEvent}
          handleUnattendEvent={handleUnattendEvent}
          user={{
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id,
          }}
        /> : <h1>Loading...</h1>}
    </div>
    <FloatingAddButton />
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
    handleAttendEvent,
    handleUnattendEvent,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EventPreview);
