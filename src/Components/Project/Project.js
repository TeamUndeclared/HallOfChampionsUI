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

// __v: 0
// _id: "602478d75c046a00158f89ee"
// approved: false
// authors: Array [ "Jeremy P. <me@email.com>", "Ricardo B. <me@email.com>, Garrett C. <me@email.com>, Matt R. <me@email.com>" ]
// classCode: "401D39"
// courseLevel: "SD400"
// description: "This is probably the most amazing project ever made and everyone involved is just the best."
// githubRepo: "https://github.com/TeamUndeclared/HallOfChampionsUI"
// image: Array(3) [ "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random" ]
// isLiveStatus: false
// isLiveUrl: "https://hall-of-fame-uf-dev.herokuapp.com/"
// productionDate: "09/25/2021"
// projectName: "Hambone"
// tags: Array [ "ReactJS", "JavaScript" ]
// upVotedBy: Array(4) [ "Jeremy P.", "Ricardo B.", "Garrett C.", … ]
// upvotes: 2

  return (

    <Paper className="Project" id="projectView">
      { (response._id) ?
      <>
        {/* The arrays are breaking because they're reading on page load, not after the response comes back */}
        <Typography variant="h4">{response.projectName}</Typography>
        {response.image.map((image, i) => (
          <img height="300" src={image} alt={`Image from the ${response.projectName} project`} />
        ))}
        {response.authors.map((author, i) => (
          <p>{author}</p>
        ))}
        <p>{response.classCode}</p>
        <p>{response.courseLevel}</p>
        <p>{response.description}</p>
        <p>{response.githubRepo}</p>
        <p>{response.isLiveStatus}</p>
        <p>{response.isLiveUrl}</p>
        <p>{response.productionDate}</p>
        <p>{response.approved}</p>
        {response.tags.map((tag, i) => (
          <p>{tag}</p>
        ))}
        {response.upVotedBy.map((voter, i) => (
          <p>{voter}</p>
        ))}
        <p>{response.upvotes}</p>
      </>
      :''
      }
    </Paper>
  );
}

export default Project;
