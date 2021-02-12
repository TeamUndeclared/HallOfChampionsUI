import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import ExitSign from './HomeSign.svg'

export default function HomeBtn() {
  return(
  <div >
    <Link align='right' to='/'>
      <a href="/" alt="Go to home"><ExitSign className="homeBtn" /></a>
    </Link>
  </div>
  )
}