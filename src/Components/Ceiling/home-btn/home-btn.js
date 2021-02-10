import React from 'react';
import {Link } from 'react-router-dom';

import {Button} from '@material-ui/core';

export default function HomeBtn() {
  return(
  <div id="homeBtn">
    <h1>get back home</h1>
    <Link to='/'>
      <Button href='/'>HOME</Button>
    </Link>
  </div>
  )
}