import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Components/Navbar';
import NewEventForm from '../Components/NewEventForm';

const CreateEvent = ({ events }) => (
  <div>
    <Navbar displayClose />
    {events.redirectToList ?
      <Redirect to="/" /> :
      <div className="container">
        <NewEventForm />
      </div>}
  </div>
);

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

export default connect(mapStateToProps)(CreateEvent);
