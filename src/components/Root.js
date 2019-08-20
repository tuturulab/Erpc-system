import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact component={Home} />
      <Route path="/example" component={<p>Holis</p>} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
