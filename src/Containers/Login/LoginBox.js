import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../../Components/LoginForm';

const LoginBox = () => (
  <div className="col--s-2-of-2 col--8-of-12 col">
    <NavBox>
      <h1 className="col col--hide">E.</h1>
      <span className="col col--s-hide">
        Don&apos;t have account?
      <Link to="/home">SIGN UP</Link>
      </span>
    </NavBox>
    <FormBox className="login_desktop">
      <h2>Sing in to Eventio</h2>
      <h4>Enter your details below.</h4>
      <br />
      <LoginForm />
    </FormBox>
  </div>
);

const NavBox = styled.div`
  height:10vh;
  text-align:right;
  margin:20px 30px 0 30px;
  & > h1{
    font-size:38px;
    float:left;
  }
  & > span{
    color:#989898;
    font-size:14px;
    margin-right:10px;
    & > a{
      text-decoration:none;
      color:#757575;
    }
  }
`;

const FormBox = styled.div`
  width:80%;
  margin:200px auto 0;
  height:60vh;
  text-align:center;
  & > h2{
    font-weight:400;
    font-size:34px;
  }
  & > h4{
    font-weight:400;    
    font-size:14px;
    color:#989898;
  }
  & input{
    display:block;
    width:100%;
    margin:10px 0;
    border:none;
    border-bottom:1px solid #989898;
    font-size:16px;
    outline:none;
    height:48px;
  }
  & button{
    padding: 20px 120px;
    color:#fff;
    background:#22d486;
    border:none;
    border-radius:5px;
    margin:20px 0;
    &:hover{
      cursor:pointer;
      background:#16ad69;
    }
  }
  & span{
    color:#989898;
    font-size:14px;
    margin:10px 0;
    & > a{
      text-decoration:none;
      color:#757575;
    }
  }

`;

export default LoginBox;
