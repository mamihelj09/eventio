import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';


const ProfileIconDropdown = ({ name, icon, id, logout }) => (
  <Dropdown>
    <DropdownTrigger>
      <span className="NavbarBox__icon">{icon}</span>
      <span className="col--s-hide col">{name}</span>
      <i className="material-icons">arrow_drop_down</i>
    </DropdownTrigger>
    <DropdownContent>
      <ul>
        <li><Link to={`/profile+${id}`}>PROFILE</Link></li>
        <li><Link to="/" onClick={logout}>LOGOUT</Link></li>
      </ul>
    </DropdownContent>
  </Dropdown>
);

export default ProfileIconDropdown;
