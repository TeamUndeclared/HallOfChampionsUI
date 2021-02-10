import React from 'react';

import "../../Assets/scss/main.scss"
import './Hallway.scss';
import Form from '../Form/Form';

function Hallway() {

  // THERE ARE FOUR DIVS!
  return (
    <div id="hallway" className="Hallway">
      This is the hallway
      <Form />
    </div>
  );
}

export default Hallway;
