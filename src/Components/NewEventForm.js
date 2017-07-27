import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleCreateEvent, dismountRedirect } from '../Actions/events_action';

class NewEventForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      capacity: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWullUnmount() {
    this.props.dismountRedirect();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleCreateEvent(this.state, this.props.user);
  }

  render() {
    return (
      <div className="x">
        <h1>Create new event</h1>
        <span>Enter details below.</span> <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleInput}
          />
          <br />
          <input
            type="date"
            placeholder="Date"
            name="date"
            onChange={this.handleInput}
          />
          <br />
          <input
            type="time"
            placeholder="Time"
            name="time"
            onChange={this.handleInput}
          />
          <br />
          <input
            type="number"
            placeholder="Capacity"
            name="capacity"
            onChange={this.handleInput}
          />
          <br />
          <input type="submit" value="CREATE NEW EVENT" />
        </form>
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
    handleCreateEvent,
    dismountRedirect,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewEventForm);
