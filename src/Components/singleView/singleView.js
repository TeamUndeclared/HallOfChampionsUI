import React, { useState, useEffect } from 'react';

import ImageSlider from './imageSlider/imageSlider'



function SingleView(props) {
  
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
    </div>
  )
}

export default SingleView;