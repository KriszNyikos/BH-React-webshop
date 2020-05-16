import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'



const mapStateToProps = state => {
  const { products, pictures } = state.cartReducer
  const highLighted = products.filter(p => p.highlighted)
  return { highLighted, pictures }
}



class Offering extends Component {


  getpath(sku){
    const picObj = this.props.pictures.filter(p => p.sku === sku)[0]
    const path = picObj.picArr[picObj.main]
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