import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
      <EventForm className="col--centered col--2-of-4 col">
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
          <button type="submit">CREATE NEW EVENT</button>
        </form>
      </EventForm>
    );
  }
}

const EventForm = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  text-align:center;
  background:#fff;
  padding:20px 30px!important;
  position:relative;
  min-height:250px;
  & > h1{
    font-weight:400;
    font-size:24px;
  }
  & > span{
    font-size:14px;
  }
  & input{
    font-family:'Hind';    
    display:block;
    width:100%;
    border:none;
    border-bottom:1px solid #989898;
    font-size:16px;
    outline:none;
    height:48px;
    color:#989898;
  }
  & button{
    text-align:center;
    padding: 20px; 
    color:#fff;
    background:#22d486;
    border:none;
    border-radius:5px;
    margin:20px 0;
    width:70%;
    font-size:14px;
    &:hover{
      cursor:pointer;
      background:#16ad69;
    }
  }
`;

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
