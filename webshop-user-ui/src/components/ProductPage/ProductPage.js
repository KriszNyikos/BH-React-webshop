import React , {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProductInfo from './ProductInfo'
import ProdRecs from './Prodrecs/ProdRecs'
import Gallery from './Gallery/Gallery'



export default class ProductPage extends Component {
    
    

    render(){
        let {sku} = this.props.match.params
        return(
            <Container>
                <Row className='justify-content-between'>
                    <Col><Gallery sku={sku}/></Col>
                    <Col><ProductInfo sku={sku}/></Col>
                </Row>
                <Row>
                <div>FUll specs</div>
                </Row>
               <Row>
                    <ProdRecs/>
               </Row>
            </Container>
        )
    }
}