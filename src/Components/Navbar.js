import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLogout } from '../Actions/user_action';

import ProfileIconDropdown from '../Containers/ProfileIconDropdown';

const Navbar = ({ user, handleLogout, displayBack, displayClose }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-4">
        <h1><strong>
          <Link to="/home">E.</Link>
        </strong></h1>
      </div>
      <div className="col-xs-4" >
        {displayBack ? <Link to="/home"> BACK</Link> : ''}
      </div>
      <div className="col-xs-4 right-align">
        {displayClose ?
          <Link to="/home">X Close</Link> :
          <ProfileIconDropdown
            name={`${user.firstName} ${user.lastName}`}
            icon={user.firstName[0] + user.lastName[0]}
            id={user.id}
            logout={handleLogout}
          />}
      </div>
    </div>
  </div>
);

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

