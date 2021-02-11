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
  results: {

  }
};




const formStore = (state = initialState, action) => {
  console.log(`formStore ran...`, state);
  let { type, payload } = action;
  console.log({ type }, { payload });
  console.log({ state });

  switch (type) {
    case 'SUBMIT_FORM':
      console.log(`Payload: `, payload);
      let newState = {
        formData: [
          payload
        ]
      };
      console.log(`newState: `, newState);
//get should be an action not a reducer

      axios({
        url: 'https://hall-of-fame-uf-dev.herokuapp.com/api/v1/projects/',
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        data: payload
      });

      return newState;

    case 'RESET':
      // This should have a way to actually reset the DOM form elements to their defaults.
      // Or maybe that should happen after this returns something to the state/DOM.
      return initialState;

    case 'GET':
      let { responseBody, responseStatus } = payload
      console.log(responseBody)
      return {...state, results: responseBody}

    case 'DELETE':
      console.log(state, payload)
      console.log(payload)
      return { 
        trophy: [
          ...state.results.map((project, i) => {
            console.log(project)
            //project.filter(project => project !== payload)
          })
        ]
      };


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



export const getData = (response, status) => {
  return {
    type: 'GET',
    payload: {
      responseBody: response,
      responseStatus: status
    },
  }
}

export default formStore;