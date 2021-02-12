import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';
import axios from 'axios';


function SingleView(props) {
  console.log({props})
  const [query, setQuery] = useState('');
  const [res, setRes] = useState({});
  
  const getProjects =  async => {
    
    //requestOptions.body = await payload;
    return axios.get(`https://hall-of-fame-uf-dev.herokuapp.com/api/v2/search/`)
      .then(response => {
        console.log(response)
          setRes(response.data)
    })
  }
  
  useEffect(() => {
    getProjects();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)
  }

  const  clickHandler = (e) => {
    console.log(e.target.value)
  }


  return(
    <div className="singleView">
      <Card>
      <h3>insert project title here</h3>
      
      <article>test text</article>
      <button value="Project Home" onClick={clickHandler}>Project Home</button>
      <button value="Technologies" onClick={clickHandler}>Technologies</button>
      <button value="Team Info" onClick={clickHandler}>Team Info</button>
      <button value="Links" onClick={clickHandler}>Links</button>
      </Card>
      {/* <button onClick={() => {props.deleteData(_id)}}>DELETE TEMP BUTTON</button> */}
    </div>
  )
}



export default (SingleView);