import React from 'react';
import {Link} from 'react-router-dom';

import { Button } from '@material-ui/core';
import Case from '../Case/Case';

import "../../Assets/scss/main.scss";
import './Main.scss';


function Main(props) {

  return (
    <>
      <Case />
      <Case />
      <Case />
      <Case />
      <Link to='/case/:type'>
        <Button href='/case/:type'>View Case</Button>
      </Link>
    </>
  );
}

export default Main;