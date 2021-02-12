import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import { CheckCircleIcon } from '@material-ui/data-grid';
import { Cancel, Delete, TrackChanges } from '@material-ui/icons';

import './Admin.scss'

function Admin() {
  const [accessToken, setAccessToken] =  useState({});
  const [rows, setRows] = useState([]);
  const {isAuthenticated, getAccessTokenSilently } = useAuth0();

  async function getToken(){
    const accessToken = await getAccessTokenSilently({
      audience: `https://hall-of-fame-uf-dev.herokuapp.com/`,
      scope:''
    });
    setAccessToken(accessToken.access_token)
  }

  function getAdminProject(){
    axios({
      url: 'https://hall-of-fame-uf-dev.herokuapp.com/api/v1/projects',
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    }).then(response => {
      console.log(response)
      setRows(response.data)
    })
  }
  function approveProject(row){
    row.approved = !row.approved;

    axios({
      url: `https://hall-of-fame-uf-dev.herokuapp.com/api/v1/projects/${row._id}`,
      method: 'PUT',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      data:row
    }).then(response => {
      console.log(response)
      getAdminProject()
    })
  }
  function liveStatusProject(row){
    row.isLiveStatus = !row.isLiveStatus;
    axios({
      url: `https://hall-of-fame-uf-dev.herokuapp.com/api/v1/projects/${row.isLiveStatus}`,
      method: 'PUT',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      data:row
    }).then(response => {
      console.log(response)
      getAdminProject()
    })
  }
  function deleteAdminProject(row){

    axios({
      url: `https://hall-of-fame-uf-dev.herokuapp.com/api/v1/projects/${row._id}`,
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    }).then(response => {
      console.log(response)
      getAdminProject()
    })
  }

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
   getAdminProject();
  }, []);
  useEffect(() => {
    console.log(rows)
   }, [rows]);

  
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
   },
  });

  const classes = useStyles();
  console.log('data', rows);

  return ( 
    isAuthenticated && (
    <Paper id='adminView' className="AdminTable">
      <div id='admin-header'>
        <h1> IM AN ADMIN CPANEL</h1>
      </div>
      <div id='project-list'>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell align="right">course level</TableCell>
                <TableCell align="right">Date Created</TableCell>
                <TableCell align="right">posted by</TableCell>
                <TableCell align="right">Live Status</TableCell>
                <TableCell align="right">Change Status</TableCell>
                <TableCell align="right">Github Repo</TableCell>
                <TableCell align="right">is approved</TableCell>
                <TableCell align="right">delete</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,idx) => (
                <TableRow key={idx}>
                  <TableCell href="toProject (row._id)" component="th" scope="row"> {row.projectName} </TableCell>
                  <TableCell align="right">{row.courseLevel}</TableCell>
                  <TableCell align="right">{row.productionDate}</TableCell>
                  <TableCell align="right">{row.postedBy}</TableCell>
                  <TableCell align="right"><IconButton href={row.isLiveUrl}>
                    {(row.isLiveStatus === true)
                      ?<TrackChanges className='isTrue' />
                      :<TrackChanges className='isFalse'/>
                    }
                  </IconButton></TableCell>

                  <TableCell align="right"><IconButton>
                    {(row.isLiveStatus === true)
                      ? <CheckCircleIcon className='isTrue' onClick={()=>liveStatusProject(row)}/>
                      : <Cancel className='isFalse' onClick={()=>liveStatusProject(row)}/>
                    }
                  </IconButton></TableCell>
                  <TableCell align="right"><IconButton href={row.githubRepo}><GitHubIcon /></IconButton></TableCell>
                  <TableCell align="right"><IconButton>
                    {(row.approved === true)
                      ? <CheckCircleIcon className='isTrue' onClick={()=>approveProject(row)}/>
                      : <Cancel className='isFalse' onClick={()=>approveProject(row)}/>
                    }
                  </IconButton></TableCell>
                  <TableCell align="right"><IconButton onClick={()=>deleteAdminProject(row)}><Delete className='isFalse'/></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
    )
  );
}

export default Admin;