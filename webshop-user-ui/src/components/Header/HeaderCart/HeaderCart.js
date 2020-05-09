import React, { Component } from 'react'
import styles from './HeaderCart.module.css'
import { BrowserRouter as Router, Link } from "react-router-dom";


const orders = [
    { price: 211, name: 'Kiskutya', quantity: 3 },
    { price: 333, name: 'Kiscica', quantity: 3 },
    { price: 456, name: 'Kishalacska', quantity: 3 },
    { price: 789, name: 'Kiskacsa', quantity: 3 },
]

const orders2 = []

let total = orders2.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

export default class HeaderCart extends Component {
    render() {
        return (


            <div className={styles.cartBody}>
                {(orders2.length === 0) ? <div>Cart is empty</div> : (<div>
                    <div>
                    Total  {total}
                    <Link to="/cart">go to cart</Link>
                </div>

                <div className={styles.cartInfos}>
                    <ul>
                        {orders.map((product) => {
                            return (
                                <li>{product.name}, {product.price}, {product.quantity} </li>
                            )
                        })}

                    </ul>
                </div>
                </div>)}
            

            </div>
        )
    }
}