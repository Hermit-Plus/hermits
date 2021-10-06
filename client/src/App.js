import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utilis/scrollToTop';

import Navbar from './components/navbar';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Hermits from './pages/hermits';
import Players from './pages/hermits/players';
import Seasons from './pages/seasons';
import Donate from './pages/donate';
import Login from './auth/login';
import Register from './auth/register';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/favorites'>
              <Favorites />
            </Route>
            <Route path='/players'>
              <Players />
            </Route>

            <Route path='/seasons'>
              <Seasons />
            </Route>
            <Route path='/donate'>
              <Donate />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/hermits/:id'>
              <Hermits />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
