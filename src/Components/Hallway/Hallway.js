import React from 'react';
import { Route, Switch } from 'react-router-dom';


import "../../Assets/scss/main.scss"
import './Hallway.scss';
import Form from '../Form/Form';
import Project from '../singleView/singleView';
import Case from '../middleView/middleView';
import Admin from '../Admin/Admin';
import Main from '../Main/Main';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

function Hallway() {

  return (
    <div id="hallway" className="Hallway">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/case/:type">
          <Case />
        </Route>
        <Route path="/project/:_id">
          <Project />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route>
          <div>404 - Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default Hallway;
