import React, { lazy, Suspense }  from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//import Home from './Home';
import NotFoundPage from './404';
//import Main from './Dashboard/Main' ;


const Home = React.lazy(() => import("./Home"));
const Main = React.lazy(() => import("./Dashboard/Main"));
const Login = React.lazy(() => import ("./Accounts/Login"));

//import './Dashboard/styles/index.scss';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={WaitingComponent(Home)}  />
        <Route exact path="/login" component={WaitingComponent(Login) } />

        <Route exact path="/home" component={WaitingComponent(Main)} />


        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

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
