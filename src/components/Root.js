import React, { lazy, Suspense }  from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


//import Home from './Home';
import NotFoundPage from './404';
//import Main from './Dashboard/Main' ;

import ScreenLoader from './Dashboard/Loader.js';

//Multi Language
import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { I18nextProvider } from 'react-i18next';

//Languages list
import EnglishLan from './i18n/translations/en/english.json';
import SpanishLan from './i18n/translations/es/spanish.json';
import Marketplace from './Marketplace/Marketplace';

const Home = React.lazy(() => import("./Home"));
const Main = React.lazy(() => import("./Dashboard/Main"));
const Login = React.lazy(() => import ("./Accounts/Login"));

//import './Dashboard/styles/index.scss';

const options = {
  // order and from where user language should be detected
  order: [ 'querystring', 'path', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
}

//var userLang = navigator.language || navigator.userLanguage;
//alert ("The language is: " + userLang);



i18n
  .use(detector)
  .use(I18nextProvider) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation : EnglishLan               // 'common' is our custom namespace
      },
      es : {
        translation : SpanishLan
      }
    },
    lng: "es",
    fallbackLng: "es", // use en if detected lng is not available

    interpolation: {
      escapeValue: false // react already safes from xss
    }


  });


//Detect language
let search = window.location.search;
let params = new URLSearchParams(search);
let foo = params.get('lng');

i18n.changeLanguage(foo);

const HomeComponent = WaitingComponent(Main);

function isUserLoggedIn() {
  let jwt = localStorage.getItem('jwt') ;
  return true;
  /* If a token exists */
  if (jwt) {
    /*Compare if the token has expired */
    //var expireDate =  Date.parse(localStorage.getItem('date') );
    //var now = new Date();
    //if ( now >= expireDate  ) {
    //  localStorage.removeItem('jwt');
    //  return false;
    //} else {
      return true;
    //}
  }else {
    return false;
  }

}


const Root = ({ store }) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router>
        <Switch>
          {/*<Route exact path="/" component={WaitingComponent(Home)}  />*/}

          <Route exact path="/login" component={WaitingComponent(Login) } />

          <Route path="/admin" render={() => (
            isUserLoggedIn() ? (
              <HomeComponent></HomeComponent>
              ) : (
              <Redirect to="/login"/>
              )
          )}/>

          <Route path="/marketplace" component={WaitingComponent(Marketplace) } />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  </I18nextProvider>
);

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={ScreenLoader}>
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
