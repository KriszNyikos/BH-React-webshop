import React, { Component } from "react"
import { Container, Row } from "react-bootstrap"
import {connect} from 'react-redux'
import ProdRecsCart from './ProdRecsCart'

const mapStateToProps = (state) => {
    const { products} = state.cartReducer
    return { products}
}

class ProdRecs extends Component{

    render(){
        return(
        <Container>
            <h2>Recommended products</h2>
            <Row>
            {
                this.props.products.map((product, index)=>{
                    const data = {sku: product.sku, name: product.name}
                   return <ProdRecsCart key={index} data={data}/>
                })
            }
            </Row>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(ProdRecs)