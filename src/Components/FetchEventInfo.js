import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadSpecificEvent } from '../Actions/events_action';
import DisplayEventInfo from '../Containers/DisplayEventInfo';

class FetchEventInfo extends React.Component {

  componentDidMount() {
    this.props.loadSpecificEvent(
      window.location.pathname.slice(window.location.pathname.indexOf('+') + 1),
      localStorage.getItem('id'),
    );
  }

  render() {
    return (<div />);
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    loadSpecificEvent,
  }, dispatch);
}
export default connect(null, matchDispatchToProps)(FetchEventInfo);
