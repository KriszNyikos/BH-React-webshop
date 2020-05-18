import React, { Component } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'


export default class OrderForm extends Component {

        constructor(){
            super()
            this.name = React.createRef();
            this.email = React.createRef();
            this.address = React.createRef();
            this.state={valid: true}

        }

        validate(){
            const errors =[]

            const name = this.name.current.value
            const email = this.email.current.value
            const address = this.address.current.value

           const errMsg = document.getElementById('error') 
            if(!name) errors.push('name')
            if(!email) errors.push('email')
            if(!address) errors.push('address')
    
            if(!errors.length){
                this.props.order({name, email, address})
               return
            }
            this.setState({valid: false})
            errMsg.innerText = `Areas required: ${errors.join(', ')}`
        }

    render() {
        let errStyle = {display: "none" }
        if(!this.state.valid) errStyle = {}
        return (
            <Container>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" ref={this.name}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your email" ref={this.email}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Postal/City/Street/Number" ref={this.address}/>
                </Form.Group>
               <Alert variant='danger' style={errStyle} id="error"></Alert>
                <Button onClick={() => this.validate()} variant="primary">
                    Order
                </Button>
            </Container>
        )
    }
}