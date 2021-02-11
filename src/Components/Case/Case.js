import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Paper, Card, CardMedia, CardContent, Grid } from '@material-ui/core';


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
      maxWidth: '90vw',
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
  }));

  const classes = useStyles();

  return (
    <Paper className="Case" id="caseView">
      <Grid 
        className="GridView" id="caseGrid"
        container 
        spacing={2} 
        direction="column"
        justify='space-evenly'
        alignItems="flex-start">
      {Object.keys(props.projects).map((project, i) => (
        <Grid 
          className="individualGridView"
          item 
          container 
          xs 
          direction="column"
          justify="space-evenly"
          alignContent="center"
          alignItems="flex-start">
            <Paper 
              elevation={4} 
              className="GridPaper">
                <Card 
                  key={i} 
                  className="IndividualProject">
                    <CardMedia 
                      className={classes.media}
                      image={props.projects[project].image[0]}
                      title="An image of the project"
                    />
                    <CardContent>
                    <p>{props.projects[project].projectName}</p>
                    </CardContent>
                </Card>
            </Paper>
        
        </Grid>
      ))}
      </Grid>
      
    </Paper>
  );
}

const mapStateToProps = state => ({
  projects: state.form.results,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);