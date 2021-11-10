import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class BookFormModal extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.formTitle.value;
        const description = event.target.formDescription.value;
        const email = event.target.formEmail.value;
        const status = event.target.formStatusCheckbox.checked;

        const newBookObj = { title, description, email, status };
        this.props.postBook(newBookObj);
    }
    render() {

        return (
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
                                    <Form.Control type='text' placeholder='Enter description of title'/>
                                </Form.Group>
                                <Form.Group controlId='formEmail'>
                                    <Form.Label>Email.</Form.Label>
                                    <Form.Control type='text' placeholder='Enter your email'/>
                                </Form.Group>
                                <Form.Group controlId='formStatusCheckbox'>
                                    <Form.Check type='checkbox' label='Has read' />
                                </Form.Group>
                                <Button type='submit' onClick={this.props.hideModal}>Add to your library</Button>
                            </Form>
                        </Modal.Body>
               
                </Modal>
                </div>
        )
    }
}
