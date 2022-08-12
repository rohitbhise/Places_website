import React from 'react';


import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import User from './user/pages/User';
import MainNavigation from './shared/Components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';


function App() {
  return (
  <Router>
    <MainNavigation/>
    <main>
    <Switch>
    <Route path="/" exact>
     <User/>
    </Route>
    <Route path="/:userId/places" exact>
    <UserPlaces/>
    </Route>
    <Redirect to={"/"}/>
    </Switch>
    </main>
    
  </Router>
  );
}

export default App;
