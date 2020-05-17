import React, { Component } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import GridProductButton from './GridProductButton'




const mapStateToProps = (state, props) => {
    const { sku } = props.data
    const {pictures} = state.cartReducer
    const picArr = pictures.filter(p => p.sku === sku)
    return { picArr }
}


class GridProduct extends Component {
    constructor(props) {
        super(props)
    }

    toProductPage(){

    } 

    render() {
        let imgPath = (this.props.picArr.find(p => p.isPrimary === 1)|| this.props.picArr[0]).imagePath
        const pic = `http://localhost:3050${imgPath}` 
        const path = `/product/${this.props.data.sku}`
        return (
            
            <Card style={{ width: '20rem', margin: '15px' }}>
               
                <Link to={path}><Card.Img variant="top" src={pic} /></Link>
                <Card.Body>
                    <Card.Text>
                        <Container>

                            <Row className='justify-content-between'>
                            <Link to={path}>  <b>{this.props.data.name}</b></Link>
                                <div>{this.props.data.sku}</div>
                                <div> Price: {this.props.data.price}</div>
                            </Row>

                        </Container>

                        <GridProductButton sku={this.props.data.sku}/>

                    </Card.Text>
                
                </Card.Body>
            </Card>


        )
    }
}

export default connect(mapStateToProps)(GridProduct)

