import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllEvents, handleAttendEvent, handleUnattendEvent } from '../Actions/events_action';
import Navbar from '../Components/Navbar';
import ChangeViewTab from '../Containers/ChangeViewTab';
import GridView from '../Containers/GridView';
import ListView from '../Containers/ListView';
import FilterEventTab from '../Containers/FilterEventTab';
import FloatingAddButton from '../Containers/FloatingAddButton';

class EventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'all',
    };
  }

  componentDidMount() {
    if (!this.props.events.allEvents.length) { this.props.fetchAllEvents(localStorage.getItem('id')); }
  }

  render() {
    const changeToGridView = () => {
      $('#gridView').removeClass('hidden');
      $('#listView').addClass('hidden');
    };

    const changeToListView = () => {
      $('#listView').removeClass('hidden');
      $('#gridView').addClass('hidden');
    };

    const changeFilterStatus = (status) => {
      this.setState({ status });
    };

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <FilterEventTab changeFilterStatus={changeFilterStatus} />
            <ChangeViewTab
              changeToGridView={changeToGridView}
              changeToListView={changeToListView}
            />
          </div>
          <div id="gridView">
            <GridView
              allEvents={this.state.status === 'all' ? this.props.events.allEvents :
                this.props.events.allEvents.filter(el => (this.state.status === 'future' ?
                  new Date(el.startsAt) < Date.now() : new Date(el.startsAt) > Date.now()))
              }
              handleAttendEvent={this.props.handleAttendEvent}
              handleUnattendEvent={this.props.handleUnattendEvent}
              user={{
                email: this.props.user.email,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                id: this.props.user.id,
              }}
            />
          </div>
          <div id="listView" className="hidden">
            <ListView
              allEvents={this.state.status === 'all' ? this.props.events.allEvents :
                this.props.events.allEvents.filter(el => (this.state.status === 'future' ?
                  new Date(el.startsAt) < Date.now() : new Date(el.startsAt) > Date.now()))
              }
              handleAttendEvent={this.props.handleAttendEvent}
              handleUnattendEvent={this.props.handleUnattendEvent}
              user={{
                email: this.props.user.email,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                id: this.props.user.id,
              }}
            />
          </div>
        </div>
        <FloatingAddButton />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    events: state.events,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllEvents,
    handleAttendEvent,
    handleUnattendEvent,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EventList);
