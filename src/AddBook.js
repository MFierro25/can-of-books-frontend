import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import BookFormModal from './BookFormModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default class AddBook extends Component {
    
constructor(props){
super(props); 
    this.state = {
        show: false,
    }
}
    showModal = () => this.setState({ show: true });

    hideModal = () => this.setState({ show: false });

    render() {
        return (
            <div>
                <Button variant="secondary" onClick={this.showModal}><FontAwesomeIcon icon={faPlusCircle}>
                </FontAwesomeIcon>
                &ensp; Add Book 
                </Button>
                <BookFormModal show={this.state.show} hideModal={this.hideModal} postBook={this.props.postBook}/>
            </div>
        )
    }
}
