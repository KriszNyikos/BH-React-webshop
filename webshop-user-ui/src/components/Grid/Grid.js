import React, { Component } from 'react'
import { connect } from 'react-redux';

import styles from './Grid.module.css'
import GridProduct from './GridProduct'
import { mapStateToAllProps } from '../../redux/services'
import { Container } from 'react-bootstrap';


class Grid extends Component {
  render() {
    return (<div>
      <h2>Grid</h2>
      <div className={styles.flexBox}>
        {this.props.products.map((product, index) => {
          return <GridProduct key={index} data={product} />
        })}
      </div>

    </div>)
  }
}

export default connect(mapStateToAllProps)(Grid)