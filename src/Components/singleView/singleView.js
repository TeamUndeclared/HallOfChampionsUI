import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import ImageSlider from './imageSlider/imageSlider'
import { getProjects } from '../../Store/form'

const mapDispatchToProps = { getProjects }

function SingleView(props) {
  console.log({props})
  const [query, setQuery] = useState('');

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)
  }

  const  clickHandler = (e) => {
    console.log(e.target.value)
  }


  return(
    <div className="singleView">
      <h3>insert project title here</h3>
      <ImageSlider />
      <article>test text</article>
      <button value="Project Home" onClick={clickHandler}>Project Home</button>
      <button value="Technologies" onClick={clickHandler}>Technologies</button>
      <button value="Team Info" onClick={clickHandler}>Team Info</button>
      <button value="Links" onClick={clickHandler}>Links</button>
      {/* <button onClick={() => {props.deleteData(_id)}}>DELETE TEMP BUTTON</button> */}
    </div>
  )
}

const mapStateToProps = state => (console.log(state.form.results), {
  _id: state.results,
})

export default connect(mapStateToProps,mapDispatchToProps)(SingleView);