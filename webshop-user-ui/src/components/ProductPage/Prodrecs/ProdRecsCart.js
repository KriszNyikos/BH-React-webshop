import React, { Component } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'




const mapStateToProps = (state, props) => {
    const { sku } = props.data
    const {pictures} = state.cartReducer
    const picObj = pictures.find(p => p.sku === sku && p.isPrimary) || pictures.find(p => p.sku)
    return { picObj }
}


class ProdRecsCart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const path = `/product/${this.props.data.sku}`
       const picPath = `http://localhost:3050${this.props.picObj.imagePath}` 
        return (
            <Card style={{ width: '10rem', margin: '15px' }}>
                <Link to={path}><Card.Img variant="top" style={{height: "100px"}}  src={picPath}/></Link>
                <Card.Body>
                    <Card.Text>
                        <Container>
                            <Row className='justify-content-between'>
                            <Link to={path}>  <b>{this.props.data.name}</b></Link>
                            </Row>
                        </Container>
                    </Card.Text>
                
                </Card.Body>
            </Card>


        )
    }
}

export default connect(mapStateToProps)(ProdRecsCart)

