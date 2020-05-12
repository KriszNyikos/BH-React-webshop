import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class Offering extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item style={{height: '300px'}}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/500/500"
            alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '300px'}}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/500/500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '300px'}}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/500/500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}