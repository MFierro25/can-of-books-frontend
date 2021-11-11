import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import UpdateModal from './UpdateModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faInfo } from '@fortawesome/free-solid-svg-icons';


export default class Book extends Component {

    constructor(props){
        super(props); 
            this.state = {
                show: false,
            }
        }
            showModal = () => this.setState({ show: true });
        
            hideModal = () => this.setState({ show: false });
        
    delete = () => {
        this.props.deleteBook(this.props.book._id)
    }

    render() {
        return (
            
            <div id='bookInfo'>
               <h3>{this.props.book.title} </h3>
               <p>{this.props.book.description} </p>
               <p>{this.props.book.status} </p>
               <Button variant='secondary' onClick={this.delete}>
               <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>&ensp; Remove</Button>
               &ensp; <Button variant='secondary' onClick={this.showModal}>
               <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>&ensp;   Update info</Button>
                <UpdateModal book={this.props.book} show={this.state.show} hideModal={this.hideModal} updateBook={this.props.updateBook}/>   
            </div>
           
        )
    }
}
