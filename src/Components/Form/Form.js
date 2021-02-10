
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
  const [isDeployed, setIsDeployed] = React.useState(false);
  const [isApproved, setIsApproved] = React.useState(false);

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

  const handleDeployedChange = (event) => {
    //console.log(event.target.value);
    let radioState = event.target.value === 'true' ? true : false
    setIsDeployed(radioState);
  };
  const handleApprovedChange = (event) => {
    //console.log(event.target.value);
    let radioState = event.target.value === 'true' ? true : false
    setIsApproved(radioState);
  };

  useEffect(() => {
    console.log(`isApproved was changed to:`, isApproved);
  }, [isApproved]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formInfo = event.target.elements;
    console.log(formInfo);
    // Need handling for authors. Convert CSL to array.
    let authorArr = [];
    formInfo.projectAuthors.value.split(',').forEach(t => { authorArr.push(t.trim())});
    // Need handling for tags. Convert CSL to array.
    let tagArr = [];
    formInfo.projectTags.value.split(',').forEach(t => { tagArr.push(t.trim())});
    // Need handling for upvotedBy. Convert CSL to array.
    let upvotedByArr = [];
    formInfo.projectUpvotedBy.value.split(',').forEach(t => { upvotedByArr.push(t.trim())});

    let deployedUrl = ""
    if (formInfo.projectDeploymentUrl === undefined) {
      deployedUrl = null;
    } else {
      deployedUrl = formInfo.projectDeploymentUrl.value;
    }

    let sendFormData = {
      "projectName": formInfo.projectName.value,
      "authors": authorArr,
      "description": formInfo.projectDescription.value,
      "image": formInfo.projectImages.value,
      "productionDate": formInfo.projectDate.value,
      "classCode": formInfo.projectDescription.value,
      "courseLevel": formInfo.projectClassLevel.value,
      "githubRepo": formInfo.projectGithubUrl.value,
      "isLiveStatus": isDeployed,
      "isLiveUrl": deployedUrl,                         // Not Required
      "tags": tagArr,                                   // Not Required
      "postedBy": formInfo.projectPostedBy.value,       // Required, not shown, attach the user's id
      "upvotedBy": upvotedByArr,                        // Shouldn't be set by the front end
      "approved": isApproved,                           // Shouldn't be set by the front end
      "upvotes": 0,                                     // Shouldn't be set by the front end
    }
    props.submitForm(sendFormData);
  }

  console.log("Props for formData", props.form.formData);

  return (
    <div className="Form">
      <h2>
        Project Submission
      </h2>
      <form onSubmit={handleSubmit}>
        <label for="projectName">
          Project Name:
        </label>
        <br />
        <input id="projectName" name="projectName" required />
        <br />

        <label for="projectAuthors">
          Authors (Comma Separated):
        </label>
        <br />
        <input id="projectAuthors" name="projectAuthors" required />
        <br />

        <label for="projectDescription">
          Description:
        </label>
        <br />
        <textarea id="projectDescription" name="projectDescription" required />
        <br />

        <label for="projectImages">
          Select project images:
        </label>
        <br />
        <input type="file" id="projectImages" name="projectImages" multiple required />
        <br />

        <label for="projectDate">
          Production Date:
        </label>
        <br />
        <input type="date" id="projectDate" name="projectDate" required />
        <br />

        <label for="projectClassLevel">
          Class Level:
        </label>
        <br />
        <select id="projectClassLevel" name="projectClassLevel" required>
          <optgroup label="Software Development">
            <option value="SD100">100: Beginner</option>
            <option value="SD200">200: Foundations</option>
            <option value="SD300">300: Intermediate</option>
            <option value="SD400">400: Advanced</option>
            <option value="SD500">500: Continuing Education</option>
          </optgroup>
          <optgroup label="Ops and Cybersecurity">
            <option value="OC100">100: Beginner</option>
            <option value="OC200">200: Foundations</option>
            <option value="OC300">300: Intermediate</option>
            <option value="OC400">400: Advanced</option>
          </optgroup>
        </select>
        <br />

        <label for="projectClassCode">
          Class Code:
        </label>
        <br />
        <input id="projectClassCode" name="projectClassCode" required />
        <br />

        <label for="projectGithubUrl">
          GitHub Repository URL:
        </label>
        <br />
        <input type="url" id="projectGithubUrl" name="projectGithubUrl" required />
        <br />

        <fieldset>
          <legend>Is the project currently deployed?</legend>
          <input type="radio" id="isLiveYes" name="IsLiveStatus"
            value="true" onChange={handleDeployedChange} checked={isDeployed === true} required />
          <label for="isLiveYes">Yes</label>
          <input type="radio" id="isLiveNo" name="IsLiveStatus"
            value="false" onChange={handleDeployedChange} checked={isDeployed === false} required />
          <label for="isLiveYes">No</label>
          <br />
          { isDeployed ?
            <>
              <label for="projectDeploymentUrl">
                Deployed URL:
              </label>
              <br />
              <input type="url" id="projectDeploymentUrl" name="projectDeploymentUrl" />
            </>
          : null }
        </fieldset>
        <br />

        <label for="projectTags">
          Framework/Libraries/Tools Used (Comma Separated):
        </label>
        <br />
        <input id="projectTags" name="projectTags" />
        <br />
        <br />

        <fieldset>
        {/* 
        "postedBy": "",                                   // Required, not shown, attach the user's id
        */}
          <legend>This will eventually be handled outside of the form:</legend>
          <label for="projectPostedBy">
            Posted By:
          </label>
          <br />
          <input id="projectPostedBy" name="projectPostedBy" required />
          <br />
        </fieldset>

        <fieldset>
        {/* 
        "upvotedBy": [],                                  // Shouldn't be set by the front end
        "approved": false,                                // Shouldn't be set by the front end
        "upvotes": 0,                                     // Shouldn't be set by the front end 
        */}
          <legend>This stuff should be handled server-side:</legend>
          <label for="projectUpvotedBy">
            Upvoted By (Comma Separated):
          </label>
          <br />
          <input id="projectUpvotedBy" name="projectUpvotedBy" required />
          <br />

          <fieldset>
            <legend>Is the project approved?</legend>
            <input type="radio" id="isApprovedYes" name="projectApprovedStatus"
              value="true" onChange={handleApprovedChange} checked={isApproved === true} required />
            <label for="isApprovedYes">Yes</label>
            <input type="radio" id="isApprovedNo" name="projectApprovedStatus"
              value="false" onChange={handleApprovedChange} checked={isApproved === false} required />
            <label for="isApprovedNo">No</label>
          </fieldset>

          <label for="projectUpvotes">
            Upvotes:
          </label>
          <br />
          <input type="number" id="projectUpvotes" name="projectUpvotes" required />
          <br />

        </fieldset>

        <input id="submitButton" type="submit"></input>
        <br /><br />
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
