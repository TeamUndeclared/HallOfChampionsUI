import React, { useState, useEffect } from 'react';
//const images = 'https://via.placeholder.com/300';

import { connect } from 'react-redux';
import { getProjects } from '../../../Store/form'
import { DataGrid } from '@material-ui/data-grid';



const mapDispatchToProps = { getProjects }

const ImageSlider = (props) => {
  const LIMIT = 4;
  const [index, setIndex] = useState(0);






  useEffect(() => {
    console.log(`use effect is being hit`)
    props.getProjects();
  }, [])

  

  const slideRight = (props) => {
    console.log(props)
    setIndex((index + 1) % props.images.length);
  }

  const slideLeft = (props) => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(props.images.length - 1)
    } else {
      setIndex(nextIndex);
    }
  }

  const fx = () => {
    //return a set of tags
    if (props.images.data) {
      return (
        <pre>formData:
          {Object.keys(props.images.data).map((data, idx) => (
            <pre key={idx}><strong>{data}</strong>: {props.images.data[data]}</pre>
          ))}
        </pre>
      )
    }

  }

  useEffect(() => {
    console.log(`use effect number 2 is being hit`, props.images.data)
    let test = fx()
    console.log(test)
  }, [props.images])

  return (

    <div>
        imageslider test text
      <button onClick={slideLeft}>{"<"}</button>
      
      {Object.keys(props.images).map((image, i) => (
        //console.log(props.images[image]);
        props.images[image].image.map((image, i) => (
          //console.log(image, i)
          <img src={image} alt="image" key={i} />
        ))

      ))}
      
      <button onClick={slideRight}>{">"}</button>
    </div>
  )
}

const mapStateToProps = state => (console.log(state), {
  images: state.form.results,
})


export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider);