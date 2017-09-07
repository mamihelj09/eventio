import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
      <EditInfoBox>
        {this.props.events.redirectToList ?
          <Redirect to="/" /> :
          <div>
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
      </EditInfoBox>
    );
  }
}

const EditInfoBox = styled.div`
  padding: 20px;    
  & > div{
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    background:#fff;
    padding:20px 30px!important;
    & input{
      font-family:'Hind';
      display:block;
      width:100%;
      border:none;
      border-bottom:1px solid #989898;
      font-size:14px;
      outline:none;
      height:48px;
      color:#313a42;
    }
    & button{
      text-align:center;
      padding: 20px; 
      color:#fff;
      background:#22d486;
      border:none;
      border-radius:5px;
      width:70%;
      margin:20px 15%;
      font-size:14px;
      &:hover{
        cursor:pointer;
        background:#16ad69;
      }
    }
  }
`;

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
