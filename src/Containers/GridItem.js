import React from 'react';
import { Link } from 'react-router-dom';


const GridItem = ({ title, description, date, attendees, owner, status, id, handleAttendEvent,
  handleUnattendEvent, user }) => (
    <div className="col-xs-12 col-sm-4">
      <div className="box">
        <Link to={`/event+${id}`} >
          <span>{date}</span>
          <h3>{title}</h3>
          <span>{owner}</span>
          <p>{description}</p>
          <span>{attendees}</span>
        </Link>
        {status === 'own' ? <button><Link to={`/edit+${id}`}>EDIT</Link></button> : ''}
        {status === 'attending' ?
          <button onClick={() => handleUnattendEvent(id, user.id)}>LEAVE</button>
          : ''}
        {status === 'not attending' ?
          <button onClick={() => handleAttendEvent(id, user)}>JOIN</button>
          : ''}
      </div>
    </div>
  );


export default GridItem;
