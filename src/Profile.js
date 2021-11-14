// import { Component } from "react";

// class Profile extends Component {

//   render() {
//     /* TODO: render information about logged in user */
//     /* STRETCH TODO: if no logged in user then redirect home */
//     return (
//     <div>
//       <h3>{this.props.user}</h3>
//     </div>) 
//   }
// };

// export default Profile;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;