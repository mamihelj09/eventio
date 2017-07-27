import React from 'react';

const FilterEventTab = ({ changeFilterStatus }) => (
  <div className="col-xs-6 filter">
    <span onClick={() => changeFilterStatus('all')}>ALL EVENTS</span>
    <span onClick={() => changeFilterStatus('future')}>FUTURE EVENTS</span>
    <span onClick={() => changeFilterStatus('past')}>PAST EVENTS</span>
  </div>
);

export default FilterEventTab;
