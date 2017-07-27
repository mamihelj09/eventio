import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';

const Login = () => (
  <div className="login_box">
    <div className="login_box__image" >
      <div className="login_box__image--blur" />
    </div>
    <div className="login_box__form">
      <Link to="/home">TO HOME</Link>
      <br />
      <span>LOGIN</span>
      <LoginForm />
    </div>
  </div>
);

export default Login;
