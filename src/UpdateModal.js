import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class UpdateModal extends Component {
    
    handleSubmit = (event) => {
        event.preventDefault()
        
        const updateBookObj={
            title: event.target.formTitle.value,
            description: event.target.formDescription.value,
            status: event.target.formStatusCheckbox.checked,
            id: this.props.book._id,
        }

        this.props.updateBook(updateBookObj);
    }

    render() {

        return (
            <div>
                 <div>
                    <Modal show={this.props.show} onHide={this.props.hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enter Your Book Info
                    </Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId='formTitle'>
                                    <Form.Label>Title:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Title'/>
                                </Form.Group>
                                <Form.Group controlId='formDescription'>
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control as='textarea' placeholder='Enter new description' style={{ height: '125px' }} />
                                </Form.Group>
                                <Form.Group controlId='formStatusCheckbox'>
                                    <Form.Check type='checkbox' label='Has read' />
                                </Form.Group>
                                <Button type='submit' onClick={this.props.hideModal}>Update</Button>
                            </Form>
                        </Modal.Body>
               
                </Modal>
                </div>
            </div>
        )
    }
}
