import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

const logout = () => {
  // alert('adasd');
  localStorage.removeItem('id');
};

const ProfileIconDropdown = ({ name, icon, id }) => (
  <div>
    <Dropdown>
      <DropdownTrigger>
        <span className="nav_icon">{icon}</span>
        <span>{name}</span>
        <i className="material-icons">arrow_drop_down</i>
      </DropdownTrigger>
      <DropdownContent>
        <ul>
          <li><Link to={`/profile+${id}`}>Profile</Link></li>
          <li><Link to="/" onClick={logout}>Logout</Link></li>
        </ul>
      </DropdownContent>
    </Dropdown>
  </div>
);

export default ProfileIconDropdown;
