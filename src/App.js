import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks.js';
import Login from './Login.js';
import Profile from './Profile'
import { withAuth0 } from '@auth0/auth0-react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: ''
    }
  }

  loginHandler = (user, email) => {
    this.setState({
      user, email
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
      email: null,
    })
  }


  render() {
    return (
      <>
        <Router>
          <Header user={this.props.auth0} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBooks user={this.state.user} /> : <Login />} 
            </Route>
          <Route exact path='/profile'>
            {this.props.auth0.isAuthenticated && <Profile />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
