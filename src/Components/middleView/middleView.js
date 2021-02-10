import React, { useState, useEffect } from 'react';

const MiddleView = (props) => {

const clickHandler = (e) => {

}

  return (
    <div>
      <h1>MiddleView test text</h1>
      <ul>
        {/* {props.list.map((listItem, i) => (
          <li key={i}>
            <section>
              {listItem.image}
            </section>
          </li>
        ))} */}
        <button onClick={clickHandler}><img src="via.placeholder.com/300"></img></button>
      </ul>

      
    </div>
  
  )
}

const mapStateToProps = state => {
  return {
    list: state.placeholder
  }
}

export default MiddleView