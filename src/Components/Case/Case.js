import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, Paper, Card, CardMedia, CardContent, Button} from '@material-ui/core';
import axios from 'axios';


import "../../Assets/scss/main.scss";
import './Case.scss';


function Main(props) {
  const [response,setResponse] = useState({})
  
  const getProjects =  async() => {
    
    //requestOptions.body = await payload;
    return axios.get('https://hall-of-fame-uf-dev.herokuapp.com/api/v2/projects/')
      .then(response => {
          console.log(`Response is: `, response);
          setResponse(response.data)
    })
  }

  useEffect(() => {
    console.log('response', response)
  }, [response]);
  useEffect(() => {
    console.log(`use effect is being hit`);
    getProjects();
    console.log('response', response)
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
      {Object.keys(response).map((project, i) => (
        <Card key={i}>
          <CardMedia 
          className={classes.media}
          image={response[project].image[0]}
          title="An image of the project"
          />
          <CardContent>
          <h1>{response[project].projectName}</h1>
          </CardContent>

          <Link to={`/project/${response[project]._id}`}>
            <Button href={`/project/${response[project]._id}`}>View Project</Button>
          </Link>

        </Card>
      ))}
      
    </Paper>
  );
}



export default Main ;