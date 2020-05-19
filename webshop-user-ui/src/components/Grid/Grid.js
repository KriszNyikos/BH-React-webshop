import React, { Component } from 'react'
import { connect } from 'react-redux';

import styles from './Grid.module.css'
import GridProduct from './GridProduct'
import { Container, Row, Col, Card } from 'react-bootstrap';



const mapStateToProps = state => {
  return { ...state.cartReducer }
}

class Grid extends Component {
  render() {
    return (
      <Container  fluid>

        <Row className="mt-5 justify-content-center">
          <Col sm={10}>
            <Card>
              <Card.Header>Products</Card.Header>
              <Card.Body>
                <Row className="justify-content-center" >
                  <Col sm={11} >
                    <Row >
                      {this.props.products.map((product, index) => {
                        return <GridProduct key={index} data={product} />
                      })}
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    )
  }
}

export default connect(mapStateToProps)(Grid)