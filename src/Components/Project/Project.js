import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { makeStyles, Paper, Card, CardMedia, CardContent, Button, Grid, Typography } from '@material-ui/core';

import "../../Assets/scss/main.scss";
import './Project.scss';

function Project(props) {
  const [response, setResponse] = useState({});
  const [projectId, setProjectId] = useState(getProjectIdFromPath());
  
  function getProjectIdFromPath() {
    return window.location.hash.split('/').pop();
  }

  const getProject = (thisProject) => {
    console.log('About to try to get a projectId of: ', thisProject);
    return axios.get(`https://hall-of-fame-uf-dev.herokuapp.com/api/v2/projects/${thisProject}`)
      .then(response => {
        console.log('Response after call: ', response.data);
        setResponse(response.data)
    })
  }

  useEffect(() => {
    getProject(projectId);
  }, [projectId]);

  useEffect(() => {
     console.log('Response changed to: ', response);
  }, [response]);

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      backgroundColor: 'beige',
    },
    card: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'beige',
      
    },
    media: {
      height: 140,
    },
  }));

  const classes = useStyles();

  return (

    <Paper className="Project" id="projectView">
      { (response._id) ?
      <>
        <Typography variant="h4">{response.projectName}</Typography>
        {response.image.map((image, i) => (
          <img height="300" src={image} alt={`Image from the ${response.projectName} project`} />
        ))}
        <div>
        <h2>Authors</h2>
        </div>
        {response.authors.map((author, i) => (
          
          <Card key={i} className={classes.card}>
          <p>{author}</p>
          </Card>
        ))}
        <Card className={classes.card}>
          <h2>Info</h2>
        <p>{response.classCode}</p>
        <p>{response.courseLevel}</p>
        <p>{response.description}</p>
        <p>{response.githubRepo}</p>
        <p>{response.isLiveStatus}</p>
        <p>{response.isLiveUrl}</p>
        <p>{response.productionDate}</p>
        <p>{response.approved}</p>
        </Card>
        {response.tags.map((tag, i) => (
          <Card className={classes.card}>
            <h2>Tags</h2>
          <p>{tag}</p>
          </Card>
        ))}
        {response.upVotedBy.map((voter, i) => (
          <Card className={classes.card}>
            <h2>Upvoted by</h2>
          <p>{voter}</p>
          </Card>
        ))}
        <Card className={classes.card}>
          <h2>Upvotes</h2>
        <p>{response.upvotes}</p>
        </Card>
      </>
      :''
      }
    </Paper>
  );
}

export default Project;
