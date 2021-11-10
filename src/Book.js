import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Book extends Component {

    delete = () => {
        this.props.deleteBook(this.props.book._id)
    }

    render() {
        return (
            <div id='bookInfo'>
                <Button variant='secondary' onClick={this.delete}>Remove</Button>
               <h3> {this.props.book.title} </h3>
               <p>{this.props.book.description} </p>
               
            </div>
        )
    }
}
