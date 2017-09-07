import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLogin } from '../Actions/user_action';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        {this.props.user.logged ?
          <Redirect to="/home" /> :
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInput}
            />
            <span className="col col--hide">
              Don&apos;t have account?
              <Link to="/home">SIGN UP</Link>
            </span>
            <button type="submit" value="SIGN IN">SIGN IN</button>
          </form>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleLogin,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
