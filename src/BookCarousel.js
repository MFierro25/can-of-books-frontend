import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Book from './Book'
import Container from  'react-bootstrap/Container'

export default class BookCarousel extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Carousel variant="dark" id='carouselItems'>
                    {this.props.books.map(book =>
                    <Carousel.Item key={book._id}>
                        <Book book={book} deleteBook={this.props.deleteBook} updateBook={this.props.updateBook}/>
                    </Carousel.Item>
                    )} 
                    </Carousel>
                </Container>
            </div>
        )
    }
}

