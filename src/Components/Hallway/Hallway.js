import React from 'react';

import "../../Assets/scss/main.scss"
import './Hallway.scss';
import Form from '../Form/Form';
import SingleView from '../singleView/singleView';

function Hallway() {

  // THERE ARE FOUR DIVS!
  return (
    <div id="hallway" className="Hallway">
      This is the hallway
      <SingleView />
    </div>
  );
}

export default Hallway;
