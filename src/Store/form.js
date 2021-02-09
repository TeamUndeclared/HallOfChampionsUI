let initialState = {
  formData: [
    {
      name: 'Example'
    }
  ],
};

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