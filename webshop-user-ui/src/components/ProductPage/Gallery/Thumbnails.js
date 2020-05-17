import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'



export default class Thumbnails extends Component {

    changeIndex(index){
        this.props.picChanger(index)
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.props.pictures.map((p, index) => {
                        const imgPath = `http://localhost:3050${p.imagePath}`
                        return (<Col xs={6} md={4}>
                            <Image onClick={() => this.changeIndex(index)} src={imgPath} thumbnail />
                        </Col>)
                    })}

                </Row>

            </Container>


        )
    }
}