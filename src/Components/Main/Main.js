import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { Button } from '@material-ui/core';
import Case from '../Case/Case';

import "../../Assets/scss/main.scss";
import './Main.scss';



function Main(props, { match, location }) {
  
  console.log(match, location)
  useEffect(() => {
    console.log(`Getting all projects`);
    props.getProjects();
  }, []);

  return (
    <>
      <Case />
      
      <Link to='/case?q=react'>
        <Button href='/case?q=react'>View Case</Button>
      </Link>
      </>
  );
}

export default Main;