import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../../Assets/scss/main.scss"
import LoginButton from '../Auth/Login-Btn/Login';

import './Ceiling.scss';
import HomeBtn from './home-btn/home-btn';

function Ceiling() {

// Search bar for get case by class.


  // Do stuff 
  return (
    <div id="ceiling" className="Ceiling">
    <Switch>
      <Route exact path="/">
        <div>Hello</div>
        <LoginButton />
      </Route>
      <Route path="/case">
        <HomeBtn />   
      </Route>
      <Route path="/project">
        <HomeBtn />
      </Route>
      <Route path="/admin">
        <HomeBtn />
      </Route>
      <Route path="/form">
        <HomeBtn />    
      </Route>
      <Route>
        <HomeBtn />
      </Route>
    </Switch>

    </div>
  );
}

export default Ceiling;
