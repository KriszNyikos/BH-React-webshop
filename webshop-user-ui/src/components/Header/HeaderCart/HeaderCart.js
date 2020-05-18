import React, { Component } from 'react'
import styles from './HeaderCart.module.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

import cart from './shopping-cart.png'
const mapStateToProps = state => {
    const { products, cart } = state.cartReducer
    return { products, cart }
}


class HeaderCart extends Component {
    render() {
        // sentinel/guard statement/check

        const total = this.props.cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0)
        return (
            <Col sm={2}>
                <div className={styles.cartBody}>

                    <div>
                        <Row className='justify-content-center align-items-center'>
                            {(this.props.cart.length === 0) ? 'Cart is empty' : `Total: ${total}`}
                            <Link to="/cart"><img style={{ height: "40px" }} src={cart} alt="logo" /></Link>
                        </Row>

                        {(this.props.cart.length !== 0) &&
                            <div className={styles.cartInfos}>
                                <table style={{ margin: 'auto', width: '200px'}} >
                                    {this.props.cart.map((product, index) => {
                                        return (
                                            <tr key={index} style={{borderBottom: '1px solid black'}}>
                                                <td style={{ whiteSpace: 'nowrap'}}>{product.quantity} x</td>
                                                <td style={{textAlign: 'left', wordWrap: 'break-word'}}> {product.name}</td>
                                                <td style={{textAlign: 'left', whiteSpace: 'nowrap'}}> = {product.price * product.quantity} HUF</td>
                                            </tr>
                                        )
                                    })}
                                    <tr><td></td><td>Total </td><td style={{textAlign: 'left', whiteSpace: 'nowrap'}}> = {total} HUF</td></tr>
                                </table>
                                
                            </div>}

                    </div>


                </div>
            </Col>
        )
    }
}

export default connect(mapStateToProps)(HeaderCart)