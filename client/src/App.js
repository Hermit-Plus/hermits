import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './layout/AppRoute';
import history from './history';
import ScrollToTop from './utilis/scrollToTop';

import Landing from './pages/landing/landing';
import LandingLayout from './layout/LandingLayout';
import Home from './pages/home';
import GeneralLayout from './layout/GeneralLayout';

import Login from './auth/login';
import Register from './auth/register';
import Players from './pages/hermits/players';
import Hermits from './pages/hermits';
import Donate from './pages/donate';
import Seasons from './pages/seasons';

import './App.css';

//! Don't forget Favorites page

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
              path='/hermit-plus'
              component={Home}
              layout={GeneralLayout}
            />
            <AppRoute
              path='/donate'
              component={Donate}
              layout={GeneralLayout}
            />
            <AppRoute
              path='/seasons'
              component={Seasons}
              layout={GeneralLayout}
            />
            <AppRoute
              path='/players'
              component={Players}
              layout={GeneralLayout}
            />
            <AppRoute
              path='/hermits/:id'
              component={Hermits}
              layout={GeneralLayout}
            />
            <AppRoute path='/login' component={Login} layout={GeneralLayout} />
            <AppRoute
              path='/register'
              component={Register}
              layout={GeneralLayout}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
