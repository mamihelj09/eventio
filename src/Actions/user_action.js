export const handleLogin = (email, password) => (dispatch) => {
  console.log(email, password);
  fetch('/authentication', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.status === 200) {
      res.json().then((data) => {
        localStorage.setItem('id', data.id);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      });
    } else dispatch({ type: 'LOGIN_FAILED' });
  });
};

export const handleLogout = () => {
  localStorage.setItem('id', null);
  return {
    type: 'LOGOUT_SUCCESS',
  };
};

