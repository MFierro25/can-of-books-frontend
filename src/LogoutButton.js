import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

// class LogoutButton extends Component {

//   render() {
//     return (
//       <Button variant="light" onClick={this.props.onLogout}>
//         Log Out &ensp;<FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
//       </Button>
//     );
//   }
// };
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="light" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out &ensp;<FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
    </Button>
  );
};

export default LogoutButton;
