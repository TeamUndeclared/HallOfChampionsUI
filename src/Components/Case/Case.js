import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles, Paper, Card, CardMedia, CardContent } from '@material-ui/core';

import "../../Assets/scss/main.scss";
import './Case.scss';

// Import Redux Store
import { getProjects } from "../../Store/form";
const mapDispatchToProps = { getProjects };

function Main(props) {

  useEffect(() => {
    console.log(`use effect is being hit`);
    props.getProjects();
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      maxWidth: '90vw'
    },
    media: {
      height: 140,
    },
  }));
  const classes = useStyles();

  return (
    <Paper className="Case" id="caseView">
      {Object.keys(props.projects).map((project, i) => (
        <Card key={i}>
          <CardMedia 
          className={classes.media}
          image={props.projects[project].image[0]}
          title="An image of the project"
          />
          <CardContent>
          <h1>{props.projects[project].projectName}</h1>
          </CardContent>



        </Card>
      ))}
    </Paper>
  );
}

const mapStateToProps = state => ({
  projects: state.form.results,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);