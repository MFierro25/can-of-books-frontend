import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks.js';
import Login from './Login.js';
import Profile from './Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  // handleClick () => {

  // }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks /> : <Login loginHandler={this.loginHandler} />} 
            </Route>
          <Route exact path='/profile'>
            {this.state.user ? <Profile user={this.state.user}/> : "please login"}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
