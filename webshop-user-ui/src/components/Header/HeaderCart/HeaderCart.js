import React, { Component } from 'react'
import styles from './HeaderCart.module.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { mapStatetoHeaderCart } from '../../../redux/services'




class HeaderCart extends Component {
    render() {
        // sentinel/guard statement/check
        if (this.props.cart.length === 0) return <div>Cart is empty</div> 


        return (

            <div className={styles.cartBody}>
                
                    <div>
                        <div>
                            Total  {this.props.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}
                            <Link to="/cart">go to cart</Link>
                        </div>

                        <div className={styles.cartInfos}>
                            <ul >
                                {this.props.cart.map((product, index) => {
                                    return (
                                        <li key={index}>{product.quantity} x {product.name} = {product.price} </li>
                                    )
                                })}

                            </ul>
                                Total  {this.props.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}
                        </div>
                    </div>
                

            </div>

        )
    }
}

export default connect(mapStatetoHeaderCart)(HeaderCart)