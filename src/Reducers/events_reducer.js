const initialState = {
  allEvents: [],
  specificEvent: {},
  redirectToList: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_ALLEVENTS_SUCCESS':
      return {
        ...state,
        allEvents: action.payload,
        redirectToList: false,
      };
    case 'FETCHED_ONE_EVENT_SUCCESS':
      return {
        ...state,
        specificEvent: action.payload,
        redirectToList: false,
      };
    case 'CREATE_EVENT_ACTION_SUCCESS':
      return {
        ...state,
        allEvents: [...state.allEvents, action.payload],
        redirectToList: true,
      };
    case 'EDIT_EVENT_ACTION_SUCCESS':
      return {
        ...state,
        redirectToList: true,
        allEvents: state.allEvents.map((item, i) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
              description: action.payload.description,
              startsAt: action.payload.startsAt,
              capacity: action.payload.capacity,
            };
          }
          return item;
        }),
        specificEvent: {
          ...state.specificEvent,
          title: action.payload.title,
          description: action.payload.description,
          startsAt: action.payload.startsAt,
          capacity: action.payload.capacity,
        },
      };
    case 'ATTEND_EVENT_SUCCESS':
      return {
        ...state,
        allEvents: state.allEvents.map((item, i) => {
          if (item.id === action.payload.eventId) {
            return {
              ...item,
              attendees: [...item.attendees, action.payload.user],
              status: 'attending',
            };
          }
          return item;
        }),
        specificEvent: (state.specificEvent.id === action.payload.eventId ? {
          ...state.specificEvent,
          attendees: [...state.specificEvent.attendees, action.payload.user],
          status: 'attending',
        } : state.specificEvent),
      };
    case 'UNATTEND_EVENT_SUCCESS':
      return {
        ...state,
        allEvents: state.allEvents.map((item, i) => {
          if (item.id === action.payload.eventId) {
            return {
              ...item,
              status: 'not attending',
              attendees: item.attendees.filter(el => el.id !== action.payload.userId),
            };
          }
          return item;
        }),
        specificEvent: (state.specificEvent.id === action.payload.eventId ? {
          ...state.specificEvent,
          status: 'not attending',
          attendees: state.specificEvent.attendees.filter(el => el.id !== action.payload.userId),
        } : state.specificEvent),
      };
    case 'DELETE_EVENT_SUCCESS':
      return {
        ...state,
        redirectToList: true,
        allEvents: state.allEvents.filter(el => el.id !== action.payload),
      };
    case 'DISMOUNT_REDIRECT':
      return {
        ...state,
        redirectToList: false,
      };
    default:
      return state;
  }
};

