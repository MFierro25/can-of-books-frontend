import React from 'react';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import AddBook from './AddBook';
import './App.css'
import Book from './Book'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  getBooks = async (email = null) => {
    let apiUrl = `http://localhost:3001/books`

    if (email) {
      apiUrl += `?email=${email}`;
    }
    try {
      const response = await axios.get(apiUrl);
      this.setState( {books: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  postBook = async (bookObj) => {
    const apiUrl = `http://localhost:3001/books`
    let res = await axios.post(apiUrl, bookObj);
    this.setState( {books: [...this.state.books, res.data]})
    
  }
  
  deleteBook = async (id) => {
    const apiUrl = `http://localhost:3001/books/${id}`;
    await axios.delete(apiUrl);
    let filteredBook = this.state.books.filter(book => book._id !== id);
    this.setState({ books: filteredBook});
  }

  componentDidMount() {
    this.getBooks()
  }
  render() {

    return (
      <>
    
        <h2>My Essential Library:</h2>
          <Carousel variant="dark" id='carouselItems'>
          {this.state.books.length > 0 ? this.state.books.map(book =>
          <Carousel.Item key={book._id} interval={100000}>

          <Book book={book} deleteBook={this.deleteBook} />
          
          </Carousel.Item>
           )  : <p> Books coming soon</p> } 
        </Carousel>
        <AddBook postBook={this.postBook} />
        
       
      </>
    )
  }
}

export default BestBooks;
