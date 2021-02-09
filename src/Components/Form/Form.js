
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';


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

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'Angular' },
    { key: 2, label: 'HTML' },
    { key: 3, label: 'CSS' },
    { key: 4, label: 'Express' },
    { key: 5, label: 'NodeJS' },
    { key: 6, label: 'Mongo DB' },
    { key: 7, label: 'Material UI' },

  ]);



  // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //   let formInfo = e.target.elements;
  //   // console.log('Project Name:....', formInfo.projectName.value)
  //   // console.log('description:....', formInfo.description.value)
  //   // console.log('Class level value:....', formInfo.classLevel.value)
  //   // console.log('Class Code:....', formInfo.classCode.value)
  //   // console.log('Live URL:....', formInfo.isLiveUrl.value)
  //   // console.log('Project Tags:....', formInfo.projectTags.value)
    
  //   console.log('Looking for Radio:....', formInfo.projectTags[3].defaultChecked)
  //   console.log('Looking for Radio:....', formInfo.projectTags[3].checked)
  //   console.log('Looking for Radio:....', formInfo.projectTags[3].value)

  //   // foreach input, if projectTags.checked is true, push projectTags.value into an array


  // }

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

      <form onSubmit={handleSubmit}>
        <label>
          Project Submission
        </label>
        <br />

        <label for="projectName">
          Project Name:
          <br />
          <input id="projectName" name="projectName" />

        </label>
        <br />
        <label for="description">
          Description:
          <br />
          <textarea id="description" name="description" />

        </label>
        <br />
        <label for="classLevel">
          Class Level:
          <br />
          <select id="classLevel" name="classLevel">
            <option value="101">101</option>
            <option value="102">102</option>
            <option value="201">201</option>
            <option value="301">301</option>
            <option value="401JavaScript">401 JavaScript</option>
            <option value="401DotNet">401 .Net</option>
            <option value="401Java">401 Java</option>
            <option value="401Python">401 Python</option>

          </select>
        </label>
        <br />
        <label for="classCode">
          Class Code:
          <br />
          <input id="classCode" name="classCode" />

        </label>
        <br />
        <label for="isLiveUrl">
          Deployed URL site:
          <br />
          <input id="isLiveUrl" name="isLiveUrl" />

        </label>
        <br />
        <label for="projectTags">
          Framework/libraries/tools used:
          <br />
          <input id="projectTags" name="projectTags" />

        </label>
        <br />
        <section for="projectTags">
          Framework/libraries/tools checkbox:
          <br />
          <section id="checkboxLabels">

            <label>
              <input id="projectTags" name="projectTags" type="checkbox" value="html" defaultChecked="false" />
              html
            </label>
            <label>
              <input id="projectTags" name="projectTags" type="checkbox" value="react" />
              react
            </label>
            <label>
              <input id="projectTags" name="projectTags" type="checkbox" value="express" />
              express
            </label>
          </section>

        </section>
        <br />
        <label for="myfile">
          Select files/Upload images:
          <input id="file" type="file" name="myfile" multiple />
        </label>


        <input id="submitButton" type="submit" />
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
