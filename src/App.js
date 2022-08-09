import React from 'react';


import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import User from './user/pages/User';
import MainNavigation from './shared/Components/Navigation/MainNavigation';


function App() {
  return (
  <Router>
    <MainNavigation/>
    <main>
    <Switch>
    <Route path="/" exact>
     <User/>
    </Route>
    <Redirect to={"/"}/>
    </Switch>
    </main>
    
  </Router>
  );
}

export default App;
