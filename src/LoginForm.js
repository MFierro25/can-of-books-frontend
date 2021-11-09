import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {

    constructor(props) {
      super(props)
      this.state = {
        user: '',

    }
    }
    handleClick = () => {
      this.props.loginHandler(this.state.user) 
    }

    handleChange = (e) => {
      this.setState({ user: e.target.value }) 
    }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
        <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>User Name:</Form.Label>
        <Form.Control onChange={this.handleChange} type="text" placeholder="Enter User Name" />
        </Form.Group>
          <Button onClick={this.handleClick} variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    );
  }
};

export default LoginForm;
