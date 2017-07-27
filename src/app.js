import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import path from 'path';

import PrivateRoute from './Routes/PrivateRoute';
import Login from './Routes/Login';
import EventList from './Routes/EventList';
// import EventPreview from './Routes/EventPreview';
// import Profile from './Routes/Profile';
// import CreateEvent from './Routes/CreateEvent';
// import EditEvent from './Routes/EditEvent';

import store from './store';
import './Style/app.scss';
const Loading = () => (<h1>Loading...</h1>);

// const LoadableComponentList = Loadable({
//   loader: () => import('./Routes/EventList'),
//   loading: Loading,
//   serverSideRequirePath: path.join(__dirname, './Routes/EventList')
// });
const LoadableComponentProfile = Loadable({
  loader: () => import('./Routes/Profile'),
  loading: Loading,
  serverSideRequirePath: path.join(__dirname, './Routes/Profile')
});
const LoadableComponentEventPreview = Loadable({
  loader: () => import('./Routes/EventPreview'),
  loading: Loading,
  serverSideRequirePath: path.join(__dirname, './Routes/EventPreview')
});
const LoadableComponentCreateEvent = Loadable({
  loader: () => import('./Routes/CreateEvent'),
  loading: Loading,
  serverSideRequirePath: path.join(__dirname, './Routes/CreateEvent')
});
const LoadableComponentEditEvent = Loadable({
  loader: () => import('./Routes/EditEvent'),
  loading: Loading,
  serverSideRequirePath: path.join(__dirname, './Routes/EditEvent')
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="root">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={EventList} />
        <PrivateRoute path="/event+:id" component={LoadableComponentEventPreview} />
        <PrivateRoute path="/profile+:id" component={LoadableComponentProfile} />
        <PrivateRoute path="/new+event" component={LoadableComponentCreateEvent} />
        <PrivateRoute path="/edit+:id" component={LoadableComponentEditEvent} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('app'));

