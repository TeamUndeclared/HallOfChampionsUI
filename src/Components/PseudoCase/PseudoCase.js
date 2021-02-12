import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import background from '../../Assets/images/case2.png';
import { Button, Container } from '@material-ui/core';
import Case from '../Case/Case';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '30em',
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: `url(${background})`,
    backgroundSize: '100%'    
  },
  psudeoCaseBG:{
    backgroundColor: (54, 30, 6),
  }
  
}));

export function PseudoCase(props) {
  const classes = useStyles();

  return (
    
    <div className="psuedoCaseBG">
      <Link to={`/case?type=${props.caseType}&query=${props.caseSearch}`}>
      <Paper className={classes.paper}>
    
          <p>{props.caseTitle}</p>
      </Paper>
    </Link>
    </div>
    

  );
}




