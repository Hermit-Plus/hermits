//? removed history as it is not used 1/1/22

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppRoute from './layout/AppRoute';
import ScrollToTop from './utilis/scrollToTop';

import Landing from './pages/landing/landing';
import LandingLayout from './layout/LandingLayout';
import Home from './pages/home';
import GeneralLayout from './layout/GeneralLayout';

import Login from './auth/login';
import Register from './auth/register';
import Players from './pages/hermits/players';
import Hermits from './pages/hermits';
import Detail from './pages/videoDetails';
import VideoPlayer from './pages/videoPlayer/videoPlayer';
import Donate from './pages/donate';
import Seasons from './pages/seasons';

import './App.css';

// todo Don't forget Favorites page

function App() {
  return (
    <div>
      <Router>
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
            <AppRoute
              path='/detail/:id'
              component={Detail}
              layout={GeneralLayout}
            />
            <Route path='/video/:id' component={VideoPlayer} />
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
