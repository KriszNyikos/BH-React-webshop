import React, { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { connect } from 'react-redux'
import ProdRecsCart from './ProdRecsCart'
import next from './next.png'
import previous from './previous.png'

const mapStateToProps = (state) => {
    const { products } = state.cartReducer
    return { products }
}

class ProdRecs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: this.props.products,
            startIndex: 0
        }

        this.viewFilter = this.viewFilter.bind(this)
    }

    viewFilter() {
        let arr = this.state.products.slice(this.state.startIndex, this.state.startIndex + 4)

        if (arr.length < 4) {

            if (Math.sign(this.state.startIndex) === -1) {
                let arr = this.state.products.slice(this.state.startIndex)
                let minusArr = this.state.products.slice(0, this.state.startIndex + 4)
                arr = [...arr, ...minusArr]

                return arr
            }

            let plusArr = this.state.products.slice(0, 4 - arr.length)
            arr = [...arr, ...plusArr]
        }
        return arr
    }

    stepper(direction) {
        switch (direction) {
            case 'next':
                if (this.state.startIndex > (this.state.products.length - 1) - 1) return (this.setState({ startIndex: 0 }))
                return this.setState({ startIndex: this.state.startIndex += 1 })

            case 'prev':
                if (this.state.startIndex < (this.state.products.length * - 1) + 1) return (this.setState({ startIndex: 0 }))
                return this.setState({ startIndex: this.state.startIndex -= 1 })

            default:
                break;
        }
    }

    render() {
        const imgStyle = { height: '30px', margin: 'auto' }
        const array = this.viewFilter()
        return (
            <Container>
                <Card className="mt-5">
                    <Card.Header> Recommended products</Card.Header>
                    <Card.Body>
                        <Row className="justify-content-center align-items-center">
                            <Col sm={1}  >
                                <Row className="justify-content-center">
                                    <img style={imgStyle} onClick={() => this.stepper('prev')} src={previous} />
                                </Row>
                            </Col>
                            <Col>
                                <Row >
                                    {
                                        array.map((product, index) => {
                                            const data = { sku: product.sku, name: product.name }
                                            return (<Col><ProdRecsCart key={index} data={data} /></Col>)
                                        })
                                    }
                                </Row>
                            </Col>
                            <Col sm={1}>
                                <Row className="justify-content-center">
                                    <img style={imgStyle} onClick={() => this.stepper('next')} src={next} />
                                </Row>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>


            </Container>
        )
    }
}

export default connect(mapStateToProps)(ProdRecs)