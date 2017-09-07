const initialState = {
  logged: false,
  displayError: false,
  firstName: '',
  lastName: '',
  id: '',
  email: '',
  autorization: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        displayError: false,
        logged: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        id: action.payload.id,
      };
    case 'LOGOUT_SUCCESS': {
      localStorage.clear();
      return initialState;
    }
    case 'LOGIN_FAILED':
      return {
        ...state,
        displayError: true,
      };
    default:
      return state;
  }
};
