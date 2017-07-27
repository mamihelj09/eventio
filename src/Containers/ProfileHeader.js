import React from 'react';

const ProfileHeader = ({ name, logo, email }) => (
  <div className="profile_header">
    <div className="x" >
      <div className="circle">
        <span>{logo}</span>
      </div>
      <span>{name}</span>
      <br />
      <span>{email}</span>
    </div>
  </div >
);

export default ProfileHeader;
