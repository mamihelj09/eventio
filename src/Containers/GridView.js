import React from 'react';
import GridItem from './GridItem';

const GridView = ({ allEvents, handleAttendEvent, handleUnattendEvent, user }) => (
  <div className="row">
    {allEvents.length ?
      <div>
        {allEvents.map(item => (
          <GridItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={`${item.createdAt.slice(0, item.createdAt.indexOf('T'))}, 
            ${item.createdAt.slice(item.createdAt.indexOf('T') + 1, item.createdAt.indexOf('T') + 6)}`}
            attendees={`${item.attendees.length} of ${item.capacity}`}
            owner={`${item.owner.firstName} ${item.owner.lastName}`}
            status={item.status}
            id={item.id}
            handleAttendEvent={handleAttendEvent}
            handleUnattendEvent={handleUnattendEvent}
            user={user}
          />
        ))}
      </div> : <h1>No Items....</h1>}
  </div>
);

export default GridView;
