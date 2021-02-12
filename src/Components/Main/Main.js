import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';

import { Button } from '@material-ui/core';
import Case from '../Case/Case';

import PseudoCase from '../PseudoCase/PseudoCase';

import "../../Assets/scss/main.scss";
import './Main.scss';



function Main(props, { match, location }) {
  let qpType = 'courseLevel'
  let qpQuery = 'SD400'

  console.log(match, location)

  return (
    <>
      
      
      <Link to={`/case?type=${qpType}&query=${qpQuery}`}>
        <PseudoCase 
          myNameIs = 'bob'
        />
        <Button href={`/case?type=${qpType}&query=${qpQuery}`}>View Case</Button>
      </Link>

      
      </>
  );
}

export default Main;