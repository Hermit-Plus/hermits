import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Favorites from '../favorites';
import Hermits from '../hermits';
// import Players from '../hermits/players';
import Seasons from '../seasons';
import Donate from '../donate';
import Login from '../../auth/login';
import Register from '../../auth/register';

const HomeApp = () => {
  return (
    <>
      <Route path='/hermit-plus'>
        <Home />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      {/* <Route path='/players'>
        <Players />
      </Route> */}
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
    </>
  );
};

export default HomeApp;
