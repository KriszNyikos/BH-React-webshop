import React, { Component } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'




const mapStateToProps = (state, props) => {
    const { sku } = props.data
    const {pictures} = state.cartReducer
    const picObj = pictures.filter(p => p.sku === sku)[0]
    return { picObj }
}


class ProdRecsCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const path = `/product/${this.props.data.sku}`
       const picPath = this.props.picObj.picArr[this.props.picObj.main] || this.props.picObj.picArr[0]
        return (
            <Card style={{ width: '5rem', margin: '15px' }}>
                <Link to={path}><Card.Img variant="top" src={picPath} /></Link>
                <Card.Body>
                    <Card.Text>
                        <Container>
                            <Row className='justify-content-between'>
                            <Link to={path}>  <b>{this.props.data.name}</b></Link>
                                <div>{this.props.data.sku}</div>
                                <div> Price: {this.props.data.price}</div>
                            </Row>
                        </Container>
                    </Card.Text>
                
                </Card.Body>
            </Card>


        )
    }
}

export default connect(mapStateToProps)(ProdRecsCart)

