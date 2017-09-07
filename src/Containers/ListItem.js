import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItem = ({ title, description, date, attendees, owner, status, id, handleAttendEvent,
  handleUnattendEvent, user }) => (
    <div className="col--s-2-of-2 col--2-of-2 col">
      <ListItemBox className="row">
        <Link to={`/event+${id}`}>
          <h1 className="col--s-2-of-2 col--3-of-12 col">{title}</h1>
          <p className="col--s-2-of-2 col--3-of-12 col">{description}</p>
          <h2 className="col--s-hide col--2-of-12 col">{owner}</h2>
          <h5 className="col--s-2-of-2 col--1-of-12 col">{attendees}</h5>
          <h3 className="col--s-1-of-2 col--2-of-12 col">{date}</h3>
        </Link>
        <div className="col--s-1-of-2 col--1-of-12 col">
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
      </ListItemBox>
    </div>
  );

const ListItemBox = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  background:#fff;
  padding:14px 20px;
  margin: 5px 0!important;
  color:#313a42;
  & a{
    cursor:default;
    color:#313a42;
    text-decoration:none;
    & > h1{
      font-weight:400;
      font-size:16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor:pointer;
      padding-right:10px;      
    }
    & > p{
      font-weight:400;
      font-size:14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color:#989898;      
      margin:0;
      padding-right:10px;      
    }
    & > h2{
      font-weight:400;
      font-size:14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color:#989898;            
      padding-right:10px;            
    }
    & > h5{
      font-weight:400;
      font-size:14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color:#989898;            
      padding-right:10px;            
    }
    & > h3{
      font-weight:400;
      font-size:14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color:#ccc;      
      padding-right:10px;            
    }
  }
  & button{
    color:#fff;
    font-weight:700;
    border:none;
    border-radius:5px;
    font-size:13px;
    width:70px;
    padding:6px 10px;
    float:right;
  }
  & .leave_btn{
    background:#ff0078;
    :hover{
      background:#d10061;
      cursor:pointer;
    }
  }
  & .join_btn{
    background:#22d486;
    :hover{
      background:#16ad69;
      cursor:pointer;
    }
  }
  & .edit_btn{
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

export default ListItem;
