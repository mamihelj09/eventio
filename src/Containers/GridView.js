import React from 'react';
import GridItem from './GridItem';

const GridView = ({ allEvents, handleAttendEvent, handleUnattendEvent, user }) => (
  <div>
    {allEvents.length ?
      <div className="row">
        {allEvents.map(item => (
          <GridItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.createdAt}
            attendees={`${item.attendees.length} of ${item.capacity}`}
            owner={`${item.owner.firstName} ${item.owner.lastName}`}
            status={item.status}
            id={item.id}
            handleAttendEvent={handleAttendEvent}
            handleUnattendEvent={handleUnattendEvent}
            user={user}
          />
        ))}
      </div> : <h1>loading...</h1>}
  </div>
);

export default GridView;
