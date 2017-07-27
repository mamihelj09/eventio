const filterEvents = (events, id) => {
  events.forEach((element) => {
    if (element.owner.id === id) element.status = 'own';
    else {
      let attend = 'not attending';
      element.attendees.forEach((el) => {
        if (el.id === id) attend = 'attending';
      });
      element.status = attend;
    }
  }, this);
};

const filterEvent = (event, id) => {
  if (event.owner.id === id) event.status = 'own';
  else {
    let attend = 'not attending';
    event.attendees.forEach((el) => {
      if (el.id === id) attend = 'attending';
    });
    event.status = attend;
  }
};

export const fetchAllEvents = id => (dispatch) => {
  fetch('/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    res.json().then((data) => {
      filterEvents(data, id);
      dispatch({
        type: 'FETCHED_ALLEVENTS_SUCCESS',
        payload: data,
      });
    });
  });
};

export const loadSpecificEvent = (eventId, id) => (dispatch) => {
  fetch(`/events/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventId }),
  }).then((res) => {
    res.json().then((data) => {
      filterEvent(data, id);
      dispatch({
        type: 'FETCHED_ONE_EVENT_SUCCESS',
        payload: data,
      });
    });
  });
};

export const handleCreateEvent = (state, user) => (dispatch) => {
  fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: state.title,
      description: state.description,
      startsAt: `${state.date}T${state.time}Z`,
      capacity: state.capacity,
      owner: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    }),
  }).then((res) => {
    res.json().then((data) => {
      filterEvent(data, user.id);
      dispatch({ type: 'CREATE_EVENT_ACTION_SUCCESS', payload: data });
    });
  });
};

export const handleEditEvent = (myId, event) => (dispatch) => {
  fetch(`/edit/${event.id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: event.id,
      title: event.title,
      description: event.description,
      startsAt: `${event.date}T${event.time}Z`,
      capacity: event.capacity,
    }),
  }).then((res) => {
    dispatch({
      type: 'EDIT_EVENT_ACTION_SUCCESS',
      payload: {
        id: event.id,
        title: event.title,
        description: event.description,
        startsAt: `${event.date}T${event.time}Z`,
        capacity: event.capacity,
      },
    });
  });
};

export const dismountRedirect = () => ({ type: 'DISMOUNT_REDIRECT' });

export const handleAttendEvent = (eventId, user) => (dispatch) => {
  fetch('/attendevent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventId, user }),
  }).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: 'ATTEND_EVENT_SUCCESS',
        payload: { eventId, user },
      });
    }
  });
};

export const handleUnattendEvent = (eventId, userId) => (dispatch) => {
  fetch('/unattendevent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventId, userId }),
  }).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: 'UNATTEND_EVENT_SUCCESS',
        payload: { eventId, userId },
      });
    }
  });
};

export const handleDeleteEvent = eventId => (dispatch) => {
  console.log(eventId);
  fetch('/deletevent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventId }),
  }).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: 'DELETE_EVENT_SUCCESS',
        payload: eventId,
      });
    }
  });
};
