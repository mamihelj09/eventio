import React from 'react';
import styled from 'styled-components';

const ChangeViewTab = ({ changeToGridView, changeToListView }) => (
  <ViewTab className="col--s-1-of-2 col--1-of-2 col">
    <span onClick={changeToGridView} role="presentation" id="gridIcon" className="active">
      <i className="material-icons" >view_module</i>
    </span>
    <span onClick={changeToListView} role="presentation" id="listIcon">
      <i className="material-icons">view_stream</i>
    </span>
  </ViewTab>
);

const ViewTab = styled.div`
  text-align:right;
  cursor:pointer;
  color:#989898;
`;

export default ChangeViewTab;
