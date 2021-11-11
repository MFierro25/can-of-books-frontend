import { Component } from "react";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

class LogoutButton extends Component {

  render() {
    return (
      <Button variant="primary" onClick={this.props.onLogout}>
        Log Out &ensp;<FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
      </Button>
    );
  }
};

export default LogoutButton;
