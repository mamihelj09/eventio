import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { handleLogout } from '../Actions/user_action';
import ProfileIconDropdown from '../Containers/ProfileIconDropdown';

const Navbar = ({ user, handleLogout, displayBack, displayClose }) => (
  <NavbarBox>
    <div className="row">
      <div className="col--s-1-of-2 col--4-of-12 col">
        <h1><Link to="/home">E.</Link></h1>
      </div>
      <div className="col--4-of-12 col col--s-hide">
        {displayBack ? <Link className="align-center" to="/home">
          <i className="material-icons">keyboard_backspace</i>Back to events</Link> : ''}
      </div>
      <div className="col--s-1-of-2 col--4-of-12 col align-right">
        {displayClose ?
          <Link to="/home"> <strong>X</strong> Close</Link> :
          <ProfileIconDropdown
            name={`${user.firstName} ${user.lastName}`}
            icon={user.firstName[0] + user.lastName[0]}
            id={user.id}
            logout={handleLogout}
          />}
      </div>
    </div>
    <br />
  </NavbarBox>
);

const NavbarBox = styled.div`
  padding:20px 30px 0;
  & h1{
    font-size:44px;
  }
  & a{
    color:#313a42;
    text-decoration:none;
  }
  & .align-right{
    text-align:right;
    & > a{

      font-size:20px;
    }
  }
  & .align-center{
    margin:10px 0;
    display:flex;
    height:100%;
    justify-content:center;
    align-items:center;
  }
  & .NavbarBox__icon{
    background:#ccc;
    font-weight:700;
    font-size:12px;
    color:#989898;
    border-radius:50%;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleLogout,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navbar);

