import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { handleEditEvent, dismountRedirect } from '../Actions/events_action';

class EditEventForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.events.specificEvent.title,
      description: this.props.events.specificEvent.description,
      date: this.props.events.specificEvent.createdAt.slice(
        0, this.props.events.specificEvent.createdAt.indexOf('T')),
      time: this.props.events.specificEvent.createdAt.slice(
        this.props.events.specificEvent.createdAt.indexOf('T') + 1,
        this.props.events.specificEvent.createdAt.indexOf('Z')),
      capacity: this.props.events.specificEvent.capacity,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillUnmount() {
    this.props.dismountRedirect();
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        {this.props.events.redirectToList ?
          <Redirect to="/" /> :
          <div>
            <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              name="title"
              onChange={this.handleInput}
            />
            <br />
            <input
              type="text"
              placeholder="Description"
              value={this.state.description}
              name="description"
              onChange={this.handleInput}
            />
            <br />
            <input
              type="date"
              placeholder="Date"
              value={this.state.date}
              name="date"
              onChange={this.handleInput}
            />
            <br />
            <input
              type="time"
              placeholder="Time"
              value={this.state.time}
              name="time"
              onChange={this.handleInput}
            />
            <br />
            <input
              type="number"
              placeholder="Capacity"
              value={(this.state.capacity)}
              name="capacity"
              onChange={this.handleInput}
            />
            <button onClick={
              () => this.props.handleEditEvent(localStorage.getItem('id'), {
                id: this.props.events.specificEvent.id,
                title: this.state.title,
                description: this.state.description,
                date: this.state.date,
                time: this.state.time,
                capacity: this.state.capacity,
              })
            }
            >DONE</button>
          </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleEditEvent,
    dismountRedirect,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EditEventForm);
