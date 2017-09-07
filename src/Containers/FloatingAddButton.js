import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FloatingAddButton = ({ user }) => (
  <FloatingButton>
    <br />
    <Link to="/new+event">
      <button>+</button>
    </Link>
  </FloatingButton >
);

const FloatingButton = styled.div`
  width:100%;
  text-align:right;
  & > a{
    & > button{
      background:#313a42;
      width:60px;
      height:60px;
      border-radius:50%;
      border:none;
      color:#fff;
      font-size:34px;
      margin:50px;
      cursor:pointer;
      :hover{
        background:#16ad69;
      }
    }
  }
`;

export default FloatingAddButton;
