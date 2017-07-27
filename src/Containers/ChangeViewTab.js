import React from 'react';

const ChangeViewTab = ({ changeToGridView, changeToListView }) => (
  <div className="col-xs-6 right-align">
    <span onClick={changeToGridView} role="presentation">
      <i className="material-icons" >view_module</i>
    </span>
    <span onClick={changeToListView} role="presentation">
      <i className="material-icons">view_stream</i>
    </span>
  </div>
);

export default ChangeViewTab;
