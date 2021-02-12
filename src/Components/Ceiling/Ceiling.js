import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileSm from '../Auth/profile/Profile-sm'
import HomeBtn from './home-btn/home-btn';
import "../../Assets/scss/main.scss"
import './Ceiling.scss';

function Ceiling() {
  return (
    <div id="ceiling" className="Ceiling">
    <Switch>
      <Route exact path="/">
        < ProfileSm />
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
