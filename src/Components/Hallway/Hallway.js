import React from 'react';

import "../../Assets/scss/main.scss"
import './Hallway.scss';
import Main from '../Main/Main';
import SingleView from '../singleView/singleView';

function Hallway() {

  return (
    <div id="hallway" className="Hallway">
      
      <Main />
      {/* 
        Or: 
        <Main /> // A component with a collection of cases, min/max 8, preset 4 by default
        <Case type="classLevel" filter="SD400" /> // This takes *something* to ask Matt (our API) for a certain set of data
        <Admin /> // A special "case" with admin "projects"
        <Form /> // Accessible by the Hamburger menu. This shows the form in a modal.
        <Project id="2539867hfg3" /> // A.k.a "singleView", this pulls a simgle project and displays it (in a modal or whatever)
      */}
    </div>
  );
}

export default Hallway;
