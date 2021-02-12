import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Logout-Btn/Logout";
import LoginButton from "../Login-Btn/Login";
import { Container } from "@material-ui/core";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
    {(isAuthenticated === false )
    ?<Container><LoginButton/></Container>
    :<Container>
      <h2>Welcome {user.name} To Hall Of Fame</h2>
      <LogoutButton/>
    </Container>
    }    
  </>
  )
};

export default Profile;