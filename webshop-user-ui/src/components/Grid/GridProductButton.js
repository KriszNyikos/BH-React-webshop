import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'


class GridProductButton extends Component {

    render() {
        return (

            <Container>
                <Row className='justify-content-between'>
                <Form.Control type="number" ref={this.qref}/>
                    <Button>Buy Item</Button>
                </Row>
            </Container>


        )
    }
}

export default connect(null, null)(GridProduct)