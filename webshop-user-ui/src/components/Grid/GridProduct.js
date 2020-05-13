import React, { Component } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import GridProductButton from './GridProductButton'



const mapStateToProps = (state) => {
    const { products } = state
    return { products }
}


class GridProduct extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Card style={{ width: '20rem', margin: '15px' }}>
                <Card.Img variant="top" src="https://picsum.photos/500/500" />
                <Card.Body>
                    <Card.Text>
                        <Container>

                            <Row className='justify-content-between'>
                                <b>{this.props.data.name}</b>
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

