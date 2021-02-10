import React, { useState, useEffect } from 'react';
//const images = 'https://via.placeholder.com/300';
import { connect } from 'react-redux';



const ImageSlider = (props) => {
  const [index, setIndex] = useState(0);




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
    if (props.images.results.data) {
      return (
        <pre>formData:
          {Object.keys(props.images.results.data).map((data, idx) => (
            <pre key={idx}><strong>{data}</strong>: {props.images.results.data[data]}</pre>
          ))}
        </pre>
      )
    }

  }

  useEffect(() => {
    console.log(`use effect number 2 is being hit`, props.images.results)
    let test = fx()
    console.log(test)
  }, [props.images.results])

  return (
    (
      <div>
        <button onClick={slideLeft}>{"<"}</button>
        {props.images.results.map((image, i) => (
          <img src={image.image} key={i}/>
          
    ))}
        <button onClick={slideRight}>{">"}</button>
      </div>
    )
  )
}

const mapStateToProps = state => (console.log(state.form), {
  images: state.form,
})


export default connect(mapStateToProps)(ImageSlider);