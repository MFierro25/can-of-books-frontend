import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';



class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>&ensp; Home</Link>
        </NavItem>
        {this.props.user ? <NavItem><Link to="/profile" className="nav-link">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>&ensp; Profile </Link></NavItem> : ''} 
        {this.props.user ? 
        <NavItem><LogoutButton /></NavItem> : ''}
        
      </Navbar>
    )
  }
}

export default Header;
