import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import NotFoundPage from './404';
//import Main from './Dashboard/Main';

//import './Dashboard/styles/index.scss';
const About = () => <div><h3>About me!</h3></div>;
const Admin = () => <div><h1>Admin template!</h1></div>;
import Main from './Dashboard/Main';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" /> } />
        <Route path="/home" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;


/*

f you wan't users to be able to refresh the site or send URLs use this:

<Route exact path="/" render={() => (
    <Redirect to="/searchDashboard"/>
)}/>
Use this if searchDashboard is behind login:

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/searchDashboard"/>
  ) : (
    <Redirect to="/login"/>
  )
)}/>


*/
