import React from 'react';
import axios from 'axios'
import AddBook from './AddBook';
import './App.css'
import BookCarousel from './BookCarousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.email}`;
    console.log(url);
    let res = await axios.get(url)
    this.setState( { books: res.data });
    }

  postBook = async (newBookObj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.email}`
    let res = await axios.post(url, newBookObj);
    this.setState( {books: [...this.state.books, res.data]})
    
  }
  
  deleteBook = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${this.props.email}`;
    let filteredBook = this.state.books.filter(book => book._id !== id);
    try {
     await axios.delete(url);
     this.setState({ books: filteredBook});
   } catch (e) {
   console.error(e); 
  }
}

  updateBook = async (updateBookObj) => {
    const url =`${process.env.REACT_APP_SERVER_URL}/books/${updateBookObj.id}?email=${this.props.email}`;
    try {
      let res = await axios.put(url, updateBookObj);
      let filteredBook = [...this.state.books].filter(book => book._id !== res.data.id);
      this.setState({ books: filteredBook });
      this.getBooks();
    } catch (e) {
      console.error(e);
    }
  }


  componentDidMount() {
    this.getBooks();
  }

  render() {

    return (
      <>
        <h2>My Essential Library:</h2>
        <BookCarousel books={this.state.books} deleteBook={this.deleteBook} updateBook={this.updateBook} />
        <AddBook postBook={this.postBook} />
      </>
    )
  }
}

export default BestBooks;
