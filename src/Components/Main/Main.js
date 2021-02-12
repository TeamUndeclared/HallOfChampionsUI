import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { PseudoCase } from '../PseudoCase/PseudoCase';

import './Main.scss';
import "../../Assets/scss/main.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justify: 'space-evenly',
    alignContent: 'stretch',

  },
  paper: {
    height: '30em',
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  arrows: {
    height: '10',
    alignSelf: 'center',
    alignContent: 'center',
    justify: 'center',
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
        <Grid
          container
          justify='center'
          alignItems='stretch'
          id='mainView'
          className='Main'
        >
          <Grid
            item container
            justify='center'
            alignItems='center'
            alignSelf='center'
            xs={1}
          >
            <Paper className={classes.arrows}><ArrowLeftIcon /></Paper>
          </Grid>

          <Grid item xs={4}>
            <PseudoCase
              caseTitle='401 JavaScript'
              caseType='courseLevel'
              caseSearch='SD400'
            />
          </Grid>

          <Grid item xs={2}>
          </Grid>

          <Grid item xs={4}>
            <PseudoCase
              caseTitle='301 JavaScript'
              caseType='courseLevel'
              caseSearch='SD300'
            />
          </Grid>

          <Grid
            item container
            justify='center'
            alignItems='center'
            alignSelf='center'
            xs={1}
          >
            <Paper className={classes.arrows}><ArrowRightIcon /></Paper>
          </Grid>

        </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}