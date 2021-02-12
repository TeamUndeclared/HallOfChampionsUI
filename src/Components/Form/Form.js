import React, {useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import "../../Assets/scss/main.scss";
import './Form.scss';
import ImageUpload from '../ImageUpload/ImageUpload';


function Form(props) {
  const [isDeployed, setIsDeployed] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDeployedChange = (event) => {
    //console.log(event.target.value);
    let radioState = event.target.value === 'true' ? true : false
    setIsDeployed(radioState);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const {user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   console.log(`isUser was changed to:`, user.email);
  // }, [user.email]);

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
    // let upvotedByArr = [];
    // formInfo.projectUpvotedBy.value.split(',').forEach(t => { upvotedByArr.push(t.trim())});

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
      "isLiveUrl": deployedUrl,     // Not Required
      "tags": tagArr,               // Not Required
      "postedBy": user.email,       // Required, not shown, attach the user's id
      "upvotedBy": [],                        // Shouldn't be set by the front end
      "approved": false,                           // Shouldn't be set by the front end
      "upvotes": 0,                                     // Shouldn't be set by the front end
    }
    async function getToken(){
      const accessToken = await getAccessTokenSilently({
         audience: `https://hall-of-fame-uf-dev.herokuapp.com/`,
         scope:''
      });
      return accessToken
    }
    
    const saveProject =  async() => {

      const data = await axios({
        url: 'https://hall-of-fame-uf-dev.herokuapp.com/api/v1/projects/',
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        data: sendFormData
      });
      return data
    }
    saveProject();
  }
  
  return (
    isAuthenticated && (
      <Paper id="submitForm" className="Form" elevation={12}>
        <h2 className="formHeader">
          Project Submission
        </h2>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form className="formBody" onSubmit={handleSubmit}>
          <FormControl className="formInput">
            <InputLabel htmlfor="projectName">Project Name:</InputLabel>
            <Input id="projectName" variant="outlined" fullWidth required />
          </FormControl>
          <br />
          <FormControl className="formInput">
            <InputLabel htmlfor="projectAuthors">Authors (Comma Separated):</InputLabel>
            <Input id="projectAuthors" variant="outlined" fullWidth required />
          </FormControl>
          <br />
          <FormControl className="formInput">
            <InputLabel htmlfor="projectDescription">Project Description:</InputLabel>
            <Input id="projectDescription" variant="outlined" fullWidth multiline rows={4} required />
          </FormControl>
          <br />
          <FormControl className="formInput">
            <KeyboardDatePicker
              margin="normal"
              id="projectDate"
              variant="outlined"
              label="Production Date"
              format="MM/dd/yyyy"
              fullWidth
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'Change Date',
              }}
            />
          </FormControl>
          <br />
          <FormControl className="formInput">
            <InputLabel htmlfor="projectClassLevel">Class Level:</InputLabel>
            <Select native id="projectClassLevel" variant="outlined" fullWidth defaultValue="" required>
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
            </Select>
          </FormControl>
          <br />
          <FormControl className="formInput">
            <InputLabel htmlfor="projectClassCode">Class Code:</InputLabel>
            <Input id="projectClassCode" variant="outlined" fullWidth required />
          </FormControl>
          <br />
          <FormControl className="formInput">
            <InputLabel htmlfor="projectGithubUrl">GitHub Repository URL:</InputLabel>
            <Input type="url" id="projectGithubUrl" variant="outlined" fullWidth required />
          </FormControl>
          <br />
  
          <FormGroup className="formInput radioGroup">
            <legend>Is the project currently deployed?</legend>
            <label for="isLiveYes" className="radioBoolean">
              <input type="radio" id="isLiveYes" name="IsLiveStatus" 
                value="true" onChange={handleDeployedChange} checked={isDeployed === true} required />
                Yes
            </label>
            <label for="isLiveYes" className="radioBoolean">
              <input type="radio" id="isLiveNo" name="IsLiveStatus"
                value="false" onChange={handleDeployedChange} checked={isDeployed === false} required />
                No
            </label>
            { isDeployed ?
              <FormControl className="formInput">
                <InputLabel htmlfor="projectDeploymentUrl">Deployed Project URL:</InputLabel>
                <Input type="url" id="projectDeploymentUrl" variant="outlined" fullWidth />
              </FormControl>
            : null }
          </FormGroup>


          <FormControl className="formInput">
            <InputLabel htmlfor="projectTags">Framework/Libraries/Tools Used (Comma Separated):</InputLabel>
            <Input id="projectTags" variant="outlined" fullWidth />
          </FormControl>
          <br />
          <br />
          <ImageUpload />

          <br />
          <br />
          <br />
          <input id="projectPostedBy" name="projectPostedBy" value={user.email} hidden required />
          <Button id="submitButton" variant="contained" type="submit" color="primary" endIcon={<CloudUploadIcon />}>
            Submit Project
          </Button>
          <br /><br />
        </form>
        </MuiPickersUtilsProvider>
      </Paper>
    )
    )
}


export default Form;