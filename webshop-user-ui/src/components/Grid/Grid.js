import React, { Component } from 'react'
import { connect } from 'react-redux';

import styles from './Grid.module.css'
import GridProduct from './GridProduct'
import { Container, Row, Col } from 'react-bootstrap';



const mapStateToProps = state => {
  return { ...state.cartReducer }
}

class Grid extends Component {
  render() {
    return (

      <Row className="justify-content-center" >
        <Col sm={10} >
          <Row >
          {this.props.products.map((product, index) => {
            return <GridProduct key={index} data={product} />
          })}
          </Row>
        </Col>
      </Row>
    )
  }
}

export default connect(mapStateToProps)(Grid)