// this can not be done in the store must be done in main react componetnts!!

// bring in and deconstruct auth0 at top of page.


import { useAuth0 } from "@auth0/auth0-react";
const {getAccessTokenSilently } = useAuth0();

// do this at begining of making a api call within the function to get token the attach to header with line below
async function getToken(){

      const accessToken = await getAccessTokenSilently({
        audience: `https://hall-of-fame-uf-dev.herokuapp.com/`,
        scope:''
      });
      return accessToken
    }

export default getToken();

// in header add 'Authorization': `Bearer ${accessToken}`