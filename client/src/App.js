import React from 'react';
import { Router, Switch } from 'react-router';
import AppRoute from './layout/AppRoute';
import history from './history';
import ScrollToTop from './utilis/scrollToTop';

// import Navbar from './components/navbar';
//! Home refactor like Landing page
import Landing from './pages/landing/landing';
import LandingLayout from './layout/LandingLayout';
import HomeApp from './pages/home_app';
import GeneralLayout from './layout/GeneralLayout';

import './App.css';

function App() {
  return (
    <div>
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <AppRoute
              exact
              path='/'
              component={Landing}
              layout={LandingLayout}
            />
            <AppRoute
              exact
              path='/app'
              component={HomeApp}
              layout={GeneralLayout}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
