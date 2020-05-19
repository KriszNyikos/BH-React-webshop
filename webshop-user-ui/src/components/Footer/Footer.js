import React, { Component } from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center mt-5">
                    <Col sm={10}>
                    <Card>
                        <Card.Header>Footer</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                    </Card.Text>

                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>


        )
    }
}