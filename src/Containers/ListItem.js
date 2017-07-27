import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ title, description, date, attendees, owner, status, id, handleAttendEvent,
  handleUnattendEvent, user }) => (
    <div className="col-xs-12 box">
      <div className="row">
        <Link to={`/event+${id}`}>
          <div className="col-xs-3">{title}</div>
          <div className="col-xs-2">{description}</div>
          <div className="col-xs-1">{owner}</div>
          <div className="col-xs-2">{date}</div>
          <div className="col-xs-1">{attendees}</div>
        </Link>
        <div className="col-xs-3">
          {status === 'own' ? <button><Link to={`/edit+${id}`}>EDIT</Link></button> : ''}
          {status === 'attending' ?
            <button onClick={() => handleUnattendEvent(id, user.id)}>LEAVE</button>
            : ''}
          {status === 'not attending' ?
            <button onClick={() => handleAttendEvent(id, user)}>JOIN</button>
            : ''}
        </div>
      </div>
    </div>
  );

export default ListItem;
