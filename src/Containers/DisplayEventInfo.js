import React from 'react';
import styled from 'styled-components';

const DisplayEventInfo = ({ id, eventId, date, title, owner, description, attendees, attendeesList,
  status, handleAttendEvent, handleUnattendEvent, user }) => (
    <div className="row">
      <br />
      <EventInfoBox className="col--s-2-of-2 col--2-of-3 col">
        <div>
          <h3>{date}</h3>
          <h1>{title}</h1>
          <h2>{owner}</h2>
          <p>{description}</p>
          <div className="col--s-1-of-2 col--1-of-2 col">
            <h5>
              <i className="material-icons">person</i>
              {attendees}
            </h5>
          </div>
          <div className="col--s-1-of-2 col--1-of-2 col right">
            {status === 'own' ? <button className="edit_btn">EDIT</button> : ''}
            {status === 'attending' ?
              <button className="leave_btn" onClick={() => handleUnattendEvent(eventId, user.id)}>
                LEAVE
              </button> : ''}
            {status === 'not attending' ?
              <button className="join_btn" onClick={() => handleAttendEvent(eventId, user)}>
                JOIN
              </button> : ''}
          </div>
        </div>
      </EventInfoBox>
      <EventAttendeesBox className="col--s-2-of-2 col--1-of-3 col">
        <div>
          <h3>Ateendees</h3>
          {attendeesList.map(item => (
            <span key={item.id} className={item.id === id ? 'you_box' : ''}>
              {item.id === id ? 'You' : `${item.firstName} ${item.lastName}`}
            </span>
          ))}
        </div>
      </EventAttendeesBox>
    </div>
  );

const EventInfoBox = styled.div`
  padding: 20px;    
  & > div{
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    background:#fff;
    padding:20px 30px!important;
    & > h1{
      font-weight:400;
      font-size:34px;
    }
    & > h2{
      font-weight:400;
      font-size:14px;    
      color:#989898;  
    }
    & > h3{
      font-weight:400;
      font-size:14px;    
      color:#ccc;        
    }
    & h5{
      font-weight:400;
      font-size:14px;    
      color:#989898;  
      display:flex;
      & > i{
        font-size:18px;
      }
    }
    & > p{
      font-weight:400;
      font-size:14px;    
      color:#989898;        
    }
    & >.right{
      text-align:right;
      & > button{
        color:#fff;
        font-weight:700;
        border:none;
        border-radius:5px;
        font-size:13px;
        width:70px;
        padding:6px 10px;
      }
      & > .leave_btn{
      background:#ff0078;
      :hover{
        background:#d10061;
        cursor:pointer;
      }
    }
    & > .join_btn{
      background:#22d486;
      :hover{
        background:#16ad69;
        cursor:pointer;
      }
    }
    & > .edit_btn{
      background:#D8DAE1;
      cursor:pointer;
     
      :hover{
        background:#b7bdc5;
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

export default DisplayEventInfo;
