import React from 'react';
import styled from 'styled-components';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

const FilterEventTab = ({ changeFilterStatus, status }) => (
  <EventTab className="col--s-1-of-2 col--1-of-2 col">
    <div className="col--s-hide col desktop">
      <span
        className={status === 'all' ? 'active' : ''}
        onClick={() => changeFilterStatus('all')}
      >ALL EVENTS</span>
      <span
        className={status === 'future' ? 'active' : ''}
        onClick={() => changeFilterStatus('future')}
      >FUTURE EVENTS</span>
      <span
        className={status === 'past' ? 'active' : ''}
        onClick={() => changeFilterStatus('past')}
      >PAST EVENTS</span>
    </div>
    <div className="col col--hide mobile">
      <Dropdown>
        <DropdownTrigger>
          <span>SHOW</span>
          <span className="dark">{status.toUpperCase()}</span>
          <i className="material-icons">arrow_drop_down</i>
        </DropdownTrigger>
        <DropdownContent>
          <ul>
            <li>
              <span
                className={status === 'all' ? 'active' : ''}
                onClick={() => changeFilterStatus('all')}
              >ALL EVENTS</span>
            </li>
            <li>
              <span
                className={status === 'future' ? 'active' : ''}
                onClick={() => changeFilterStatus('future')}
              >FUTURE EVENTS</span>
            </li>
            <li>
              <span
                className={status === 'past' ? 'active' : ''}
                onClick={() => changeFilterStatus('past')}
              >PAST EVENTS</span>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    </div>
  </EventTab >
);

const EventTab = styled.div`
  & > .col{
   padding:0; 
  }
  & > div{
    display:flex;
    flex-direction:row;
    color:#989898;
    font-size:12px;
    font-weight:700;
    & .dark{
      color:#313a42;
    }
    & > span{
      cursor:pointer;
      margin: 0 10px 0 0;
    }
  }
`;

export default FilterEventTab;
