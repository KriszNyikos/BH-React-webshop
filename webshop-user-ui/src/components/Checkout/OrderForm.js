import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'


export default class OrderForm extends Component {
    render() {
        return (
            <Container>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Postal/City/Street/Number" />
                </Form.Group>

                <Button onClick={this.props.order} variant="primary">
                    Order
                </Button>
            </Container>
        )
    }
}