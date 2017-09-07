import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
      <EdiNavBox className="row">
        <div className="col--s-1-of-2 col--1-of-2 col">
          <span>DETAIL EVENT: #{events.specificEvent.id}</span>
        </div>
        <div className="col--s-1-of-2 col--1-of-2 col right">
          <button onClick={() => handleDeleteEvent(events.specificEvent.id)}>
            <strong className="col--s-hide col">DELETE EVENT</strong>
            <i className="material-icons">delete</i>
          </button>
        </div>
      </EdiNavBox>
      <div className="row">
        <div className="col--s-2-of-2 col--2-of-3 col">
          {events.specificEvent.id === window.location.pathname.slice(
            window.location.pathname.indexOf('+') + 1) ?
              <EditEventForm />
            : <h1>Loading...</h1>}
        </div>
        <EventAttendeesBox className="col--s-hide col--1-of-3 col">
          {events.specificEvent.attendees ?
            <div>
              <h3>Attendees</h3>
              {events.specificEvent.attendees.map(item => (
                <span key={item.id} className={item.id === user.id ? 'you_box' : ''}>
                  {item.id === user.id ? 'You' : `${item.firstName} ${item.lastName}`}
                </span>
              ))}
            </div>
            : ''}
        </EventAttendeesBox>
      </div>
    </div>
  </div>
);

const EdiNavBox = styled.div`
  & span{
    color: #989898;
    font-size: 14px;
    font-weight: 700;
  }
  & > .right{
    & > button{
      width:100%;
      background:transparent;
      border:none;
      color:#ff0078;
      font-weight:700;
      display:flex;
      justify-content: flex-end;
      font-size:12px;
      & > i{
        font-size:14px;
      }
    }
  }
`;

const EventAttendeesBox = styled.div`  
  padding: 20px;    
  & > div{
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    background:#fff;
    padding:20px 30px!important;
    & > h3{
      font-weight:400;
      font-size:22px;
    }
    & > span{
      padding:6px 12px;
      color:#989898;
      margin:5px;
      font-size:12px;
      background:#ccc;
      border-radius:50px;
      display:inline-block;
    }
    & > .you_box{
      padding:6px 12px;
      color:#989898;
      margin:5px;
      font-size:12px;
      background:#fff;
      border:2px solid #989898;
      border-radius:50px;
      display:inline-block;
    }
  }  
`;

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
