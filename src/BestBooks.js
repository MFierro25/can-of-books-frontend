import React from 'react';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  getBooks = async (title = null) => {
    let apiUrl = `${process.env.REACT_APP_SERVER}`

    if (title) {
      apiUrl += `?title=${title}`;
    }
    try {
      const response = await axios.get(apiUrl);
      this.setState( {books: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  

  componentDidMount() {
    this.getBooks()
  }
  render() {

    return (
      <>
    
        <h2>My Essential Library:</h2>

          <Carousel fade>
          {this.state.books.length > 0 ? this.state.books.map(book =>
          <Carousel.Item>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            
          </Carousel.Item>
           )  : <p> Books coming soon</p> } 
        </Carousel>
       
      </>
    )
  }
}

export default BestBooks;
