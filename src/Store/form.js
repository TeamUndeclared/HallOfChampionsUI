import { assertExpressionStatement } from "@babel/types";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import axios from 'axios';
let initialState = {
  formData: 
    {
      projectName: "",
      authors: [],
      description: "",
      image: [],
      productionDate: "",
      classCode: "",
      githubRepo: "",
      isLiveStatus: false,
      isLiveUrl: "",
      postedBy: "",
      upvotedBy: [],
      approved: false,
      upvotes: 0,
      tags: []
    },
};

const config = {
  url: 'https://hall-of-fame-uf-dev.herokuapp.com/api/v1/projects/',
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  data: {}

}



const formStore = (state = initialState, action) => {
  console.log(`formStore ran...`);
  let { type, payload } = action;
  console.log({type},{payload});
  console.log({state});

  switch (type) {
    case 'SUBMIT_FORM':
      console.log(`Payload: `, payload);
      let newState = {
        formData: [
          payload
        ]
      };
      console.log(`newState: `, newState);
      config.data = payload;
      axios(config);
        
      return newState;

    case 'RESET':
      // This should have a way to actually reset the DOM form elements to their defaults.
      // Or maybe that should happen after this returns something to the state/DOM.
      return initialState;

    default:
      return state;
  }
};

export const submitForm = (data) => {
  return {
    type: 'SUBMIT_FORM',
    payload: data
  };
};

export const resetForm = () => {
  return {
    type: 'RESET',
  };
};

export default formStore;