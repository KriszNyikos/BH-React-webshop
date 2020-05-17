import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'



const mapStateToProps = (state, props) => {
  const {sku} = props
  const { products, pictures } = state.cartReducer
  const highLighted = products.filter(p => p.hlighted)
  return { highLighted, pictures }
}



class Offering extends Component {


  getpath(sku){
    const picObj = this.props.pictures.filter(p => p.isPrimary === 1 && p.sku === sku)[0] || this.props.pictures.filter(p => p.sku === sku)[0]
    const path = `http://localhost:3050${picObj.imagePath}` 
    return path
  }



  render() {
    return (
      <Carousel>
        {this.props.highLighted.map(product => {
          const path = `/product/${product.sku}`
          return (
            <Carousel.Item style={{ height: '300px' }}>
              <img
                className="d-block w-100"
                src={this.getpath(product.sku)}/>
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <Link to={path}>Link to product</Link>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
}

export default connect(mapStateToProps)(Offering)