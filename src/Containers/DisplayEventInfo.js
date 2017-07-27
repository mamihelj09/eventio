import React from 'react';

const DisplayEventInfo = ({ id, eventId, date, title, owner, description, attendees, attendeesList,
  status, handleAttendEvent, handleUnattendEvent, user }) => (
    <div className="row">
      <div className="col-xs-12 col-sm-8">
        <span>{date}</span>
        <h2>{title}</h2>
        <span>{owner}</span>
        <p>{description}</p>
        <span>{attendees}</span>
        {status === 'own' ? <button>EDIT</button> : ''}
        {status === 'attending' ?
          <button onClick={() => handleUnattendEvent(eventId, user.id)}>LEAVE</button>
          : ''}
        {status === 'not attending' ?
          <button onClick={() => handleAttendEvent(eventId, user)}>JOIN</button>
          : ''}
      </div>
      <div className="col-xs-12 col-sm-4">
        <h3>Ateendees:</h3>
        {attendeesList.map(item => (
          <span key={item.id}>
            {item.id === id ? 'You' : `${item.firstName} ${item.lastName}`}
          </span>
        ))}
      </div>
    </div>
  );

export default DisplayEventInfo;
