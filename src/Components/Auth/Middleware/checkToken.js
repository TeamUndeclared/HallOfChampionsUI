// this can not be done in the store must be done in main react componetnts!!

// bring in and deconstruct auth0 at top of page.


import { useAuth0 } from "@auth0/auth0-react";
const {getAccessTokenSilently } = useAuth0();

// do this at begining of making a api call within the function to get token the attach to header with line below
async function getToken(){
    const domain = "dev-4zbaxg9b.us.auth0.com";

    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope:''
      });
      return accessToken
    } catch (e) {
      console.log(e.message);
    }
  };
export default getToken();

// in header add 'Authorization': `Bearer ${accessToken}`