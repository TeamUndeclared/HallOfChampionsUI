import React, { useState, useEffect } from 'react';
//const images = 'https://via.placeholder.com/300';
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

  return (
    props.images.length > 0 && (
      <div>
        <button onClick={slideLeft}>{"<"}</button>
        <img src={props.images[index]} alt={index} />
        <button onClick={slideRight}>{">"}</button>
      </div>
    )
  )
}

const mapStateToProps = state => {
  return {
    images: state.image
    //images should be an array when imported
  }
}


export default ImageSlider