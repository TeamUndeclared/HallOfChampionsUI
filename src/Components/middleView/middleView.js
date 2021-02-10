import React, { useState, useEffect } from 'react';

const MiddleView = (props) => {

const clickHandler = (e) => {

}

  return (
    <div>

      <h1>MiddleView test title text</h1>
      <section>left arrow, these might be replaced by paginating the cases</section>
      <ul>
        {/* {props.list.map((listItem, i) => (
          <li key={i} onClick={clickHandler}>
            <section>
              {listItem.image}
            </section>
          </li>
        ))} */}
        <button onClick={clickHandler}><img src="via.placeholder.com/300"></img></button>
      </ul>
      <section>right arrow, these might be replaced by paginating the cases</section>

    </div>
  
  )
}

const mapStateToProps = state => {
  return {
    list: state.placeholder
  }
}

export default MiddleView