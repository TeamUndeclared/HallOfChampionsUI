import React from 'react';
import { Route, Switch } from 'react-router-dom';


import "../../Assets/scss/main.scss"
import './Hallway.scss';
import Form from '../Form/Form';
import Project from '../Project/Project';
import Case from '../Case/Case';
import Admin from '../Admin/Admin';
import Main from '../Main/Main';
import ProfilePage from '../Auth/profile/Profile-page';
import AboutUs from '../About/About';

function Hallway() {

  return (
    <div id="hallway" className="Hallway">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route path="/case">
          <Case />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/admin">
          {/* <Admin /> */}
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route>
          <div>404 - Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default Hallway;
