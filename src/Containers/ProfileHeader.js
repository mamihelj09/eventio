import React from 'react';
import styled from 'styled-components';

const ProfileHeader = ({ name, logo, email }) => (
  <ProfileHeaderBox>
    <div className="circle">
      <h2>{logo}</h2>
    </div>
    <h1>{name}</h1>
    <h3>{email}</h3>
  </ProfileHeaderBox >
);

const ProfileHeaderBox = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  min-height:200px;
  background:#fff;
  margin-top:100px;
  text-align:center;
  & > .circle{
    transform: translateY(-50%);
    & > h2{
      width:100px;
      height:100px;
      background:#ccc;
      color:#989898;
      border-radius:50%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight:400;
      font-size:38px;
    }
  }
  & > h1{
    font-weight:400;    
    font-size:26px;
  }
  & > h3{
    font-weight:400;
    font-size:18px;
    color:#989898;
  }
`;

export default ProfileHeader;
