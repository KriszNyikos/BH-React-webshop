import React , {Component} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import ProductInfo from './ProductInfo'
import ProdRecs from './Prodrecs/ProdRecs'
import Gallery from './Gallery/Gallery'

const mapStateToProps = (state, props) => {
    const { sku } = props.match.params
    const product = state.cartReducer.products.filter(e => e.sku === sku)[0]
    return { product, sku }
}

class ProductPage extends Component {
    
    

    render(){
        let {sku} = this.props
        return(
            <Container>
                <Row className='justify-content-between'>
                    <Col><Gallery sku={sku}/></Col>
                  <Col><ProductInfo product={this.props.product}/></Col>
                </Row>
                <Row>
                <Form.Label>Full specification:</Form.Label>
                <Form.Control as="textarea" disabled rows="3" value={this.props.product.specs}/>
                </Row>
               <Row>
                    <ProdRecs/>
               </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(ProductPage)