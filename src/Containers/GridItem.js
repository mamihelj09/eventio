import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GridItem = ({ title, description, date, attendees, owner, status, id, handleAttendEvent,
  handleUnattendEvent, user }) => (
    <div className="col--s-2-of-2 col--1-of-3 col">
      <GridItemBox>
        <Link to={`/event+${id}`} >
          <h3>{date}</h3>
          <h1>{title}</h1>
          <h2>{owner}</h2>
          <p>{description}</p>
        </Link>
        <div className="col--s-1-of-2 col--1-of-2 col left">
          <h5>
            <i className="material-icons">person</i>
            {attendees}
          </h5>
        </div>
        <div className="col--s-1-of-2 col--1-of-2 col right">
          {status === 'own' ?
            <button className="edit_btn">
              <Link to={`/edit+${id}`}>EDIT</Link>
            </button> : ''}
          {status === 'attending' ?
            <button className="leave_btn" onClick={() => handleUnattendEvent(id, user.id)}>
              LEAVE
            </button> : ''}
          {status === 'not attending' ?
            <button className="join_btn" onClick={() => handleAttendEvent(id, user)}>
              JOIN
              </button> : ''}
        </div>
      </GridItemBox>
    </div>
  );

const GridItemBox = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  min-height:220px;
  background:#fff;
  padding:20px 30px;
  margin: 15px 10px;
  color:#313a42;
  position:relative;
  & a{
    cursor:default;
    color:#313a42;
    text-decoration:none;
    & > h1{
      font-weight:400;
      font-size:22px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor:pointer;
    }
    & > h3{
      font-weight:400;
      font-size:14px;      
      color:#ccc;
    }
    & > h2{
      font-weight:400;
      font-size:18px;      
      color:#989898;      
    }
    & > p{
      font-weight:400;
      font-size:14px;      
      color:#989898;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
    }
  }
  & .left{
    text-align:left;
    padding:0;
    & > h5{
      font-weight:400;
      font-size:14px;      
      color:#989898;      
      display:flex;
      & > i {
        font-size:18px;
      }
    }
  }
  & .right{
    text-align:right;
    padding:0;
    & > button{
      color:#fff;
      font-weight:700;
      border:none;
      border-radius:5px;
      font-size:13px;
      width:70px;
      padding:6px 10px;
    }
    & > .leave_btn{
      background:#ff0078;
      :hover{
        background:#d10061;
        cursor:pointer;
      }
    }
    & > .join_btn{
      background:#22d486;
      :hover{
        background:#16ad69;
        cursor:pointer;
      }
    }
    & > .edit_btn{
      background:#D8DAE1;
      cursor:pointer;
      & > a{
        cursor:pointer;
        color:#989898;
      }
      :hover{
        background:#b7bdc5;
      }
    }
  }
`;

export default GridItem;
