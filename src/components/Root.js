import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Main from './Dashboard/Main';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Main} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
