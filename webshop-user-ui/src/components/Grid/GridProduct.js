import React, { Component } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GridProductButton from './GridProductButton'




const mapStateToProps = (state, props) => {
    const { sku } = props.data
    const { pictures } = state.cartReducer
    const picArr = pictures.filter(p => p.sku === sku)
    return { picArr }
}


class GridProduct extends Component {
    constructor(props) {
        super(props)
    }

    toProductPage() {

    }

    render() {
        let imgPath = (this.props.picArr.find(p => p.isPrimary === 1) || this.props.picArr[0]).imagePath
        const pic = `http://localhost:3050${imgPath}`
        const path = `/product/${this.props.data.sku}`
        return (
            <Col sm={4}>
                <Row className="justify-content-center">
            <Card border="secondary" style={{ width: '18rem', margin: '5px' }}>
                <Link to={path}><Card.Img variant="top" style={{height: '220px'}} src={pic} /></Link>
                <Card.Header>
                    <Container>

                        <Row className='justify-content-between' >
                            <p><Link to={path}>  <b>{this.props.data.name}</b></Link></p>
                        </Row>
                        <Row className='justify-content-between' >
                            <div>id: {this.props.data.sku}</div>
                            <div> Price: {this.props.data.price} HUF</div>
                        </Row>

                    </Container>
                </Card.Header>
                <Card.Body>
                    <Card.Text>

                        <GridProductButton sku={this.props.data.sku} />

                    </Card.Text>

                </Card.Body>
            </Card>
            </Row>
            </Col>

        )
    }
}

export default connect(mapStateToProps)(GridProduct)

