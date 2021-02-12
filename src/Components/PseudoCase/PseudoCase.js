import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


import { Button } from '@material-ui/core';
import Case from '../Case/Case';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '30em',
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  
}));

export function PseudoCase(props) {
  const classes = useStyles();

  return (
    
    
    <Link to={`/case?type=${props.caseType}&query=${props.caseSearch}`}>
      <Paper className={classes.paper}>
    
          <p>{props.caseTitle}</p>
      </Paper>
    </Link>

  );
}




