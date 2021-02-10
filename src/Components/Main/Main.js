import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { Button, makeStyles, Paper, Card, CardMedia, CardContent } from '@material-ui/core';
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
      <Case />
      <Case />
      <Case />
      <Link to='/case/:type'>
        <Button href='/case/:type'>View Case</Button>
      </Link>
    </>
  );
}

const mapStateToProps = state => ({
  projects: state.form.results,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);