import React from 'react';
import axios from 'axios'
import AddBook from './AddBook';
import './App.css'
import BookCarousel from './BookCarousel';
import { withAuth0 } from '@auth0/auth0-react';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBooks()
}

  getBooks = async () => {
  
      if (this.props.auth0.isAuthenticated) {
  
        const res = await this.props.auth0.getIdTokenClaims();
    
        const jwt = res.__raw;
    
        const config = {
          headers: { "Authorization": `Bearer ${jwt}`},
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/books',
        }
        try {
      const response = await axios(config);
      this.setState({ books: response.data });
        } catch (error) {
          console.log(error);
        }
  };
};
    
    postBook = async (newBookObj) => {
      if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        const config = {
          headers: {"Authorization": `Bearer ${jwt} `},
          method: 'post',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/books',
          data: newBookObj,
        };
        try {
          let res = await axios (config);
          this.setState({ books: [...this.state.books, res.data]});
        } catch (error) {
          console.error(error);
        };
    };
  };
  
  deleteBook = async (id) => {
    if (this.props.auth0.isAuthenticated) {
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config ={
      headers: {"Authorization": `Bearer ${jwt}`},
      method: 'delete',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/books/${id}`
    }
    try {
      await axios(config);
    let filteredBook = this.state.books.filter(book => book._id !== id);
     this.setState({ books: filteredBook});
   } catch (e) {
   console.error(e); 
  }
}
}

  updateBook = async (id, updateBookObj) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: {"Authorization": `Bearer ${jwt}`},
        method: 'put',
        baseURL: process.env.REACT_APP_DB_URL,
        url: `/books/${id}`,
        data: {...updateBookObj, email: this.props.auth0.user.email},
      }
      try {
        await axios(config);
        this.getBooks();
      } catch (error) {
        console.error(error.toString());
      }
    }

    //   const url =`${process.env.REACT_APP_SERVER_URL}/books/${updateBookObj.id}?email=${this.props.email}`;
    // try {
    //   let res = await axios.put(url, updateBookObj);
    //   let filteredBook = [...this.state.books].filter(book => book._id !== res.data.id);
    //   this.setState({ books: filteredBook });
    //   this.getBooks();
    // } catch (e) {
    //   console.error(e);
    // }
  }

  render(){

    return (
      <>
        <h2>My Essential Library:</h2>
        <BookCarousel books={this.state.books} deleteBook={this.deleteBook} updateBook={this.updateBook} />
        <AddBook postBook={this.postBook} />
      </>
    )
  }
}

export default withAuth0(BestBooks);
