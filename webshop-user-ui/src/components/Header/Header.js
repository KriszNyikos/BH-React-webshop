import React, { Component } from 'react'
import HeaderCart from './HeaderCart/HeaderCart'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Header.module.css'
import logo from './logo.png'
import { Link } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col>
                    <Link to="/products"><img style={{width: '150px'}} src={logo} alt="logo" /> </Link>
                     </Col>


                    <HeaderCart />

                </Row>

            </Container>



        )
    }
}
