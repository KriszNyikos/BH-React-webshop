import React, { Component } from 'react'
import HeaderCart from './HeaderCart/HeaderCart'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Header.module.css'


export default class Header extends Component {
    render() {
        return (
            <Container fluid='md'>
                <Row className='justify-content-between'>
                    <img src='#' alt="logo" />

                    <h3>My webshop</h3>

                    <HeaderCart />
                </Row>

            </Container>



        )
    }
}
