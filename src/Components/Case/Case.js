import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { makeStyles, Paper, Card, CardMedia, CardContent, Button, Grid } from '@material-ui/core';

import "../../Assets/scss/main.scss";
import './Case.scss';

function Case(props) {
  let qpType, qpQuery = '';
  const [response, setResponse] = useState({});
  const [userQuery, setUserQuery] = useState(useQuery());
  
  function useQuery() {
    let location = useLocation();
    const urlparams = new URLSearchParams(location.search);
    qpType = urlparams.get('type');
    qpQuery = urlparams.get('query');
    return urlparams;
  }

  const getProjects =  async(qpType, qpQuery) => {
    console.log(qpType, qpQuery)
    //requestOptions.body = await payload;
    return axios.get(`https://hall-of-fame-uf-dev.herokuapp.com/api/v2/search/${qpType}?search=${qpQuery}`)
      .then(response => {
          setResponse(response.data)
    })
  }

  useEffect(() => {
    getProjects(qpType, qpQuery);
  }, [userQuery]);

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
      {Object.keys(response).map((project, i) => (
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
                      image={response[project].image[0]}
                      title="An image of the project"
                    />
                    <CardContent>
                      <p>{response[project].projectName}</p>
                      <Link to={`/project/${response[project]._id}`}>
                        <Button href={`/project/${response[project]._id}`}>View Project</Button>
                      </Link>
                    </CardContent>
                </Card>
            </Paper>
        
        </Grid>
      ))}
      </Grid>      
    </Paper>
  );
}

export default Case;
