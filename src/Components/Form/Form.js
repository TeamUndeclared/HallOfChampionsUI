import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import "../../Assets/scss/main.scss"
import './Form.scss';

// Import Redux Store
import { submitForm, resetForm } from "../../Store/form";
const mapDispatchToProps = { submitForm, resetForm };

function Form(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    let formInfo = event.target.elements;
    let sendFormData = {
      name: formInfo.textTest.value
    }
    props.submitForm(sendFormData);
  }

  // Do stuff 
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label for="textTest">Text Test:
          <input id="textTest" name="textTest" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <pre>formData:
      {props.form.formData.map((data, idx) => (
        <p key={idx}>{idx}: {data.name}</p>
      ))}
      </pre>
    </div>
  );
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
