import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles, Paper, Card, CardMedia, CardContent } from '@material-ui/core';
import Case from '../Case/Case';

import "../../Assets/scss/main.scss";
import './Main.scss';

// Import Redux Store
import { getProjects } from "../../Store/form";
const mapDispatchToProps = { getProjects };

function Main(props) {

  useEffect(() => {
    console.log(`Getting all projects`);
    props.getProjects();
  }, []);

  return (
    <>
      <Case />
      
    </>
  );
}

const mapStateToProps = state => ({
  projects: state.form.results,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);