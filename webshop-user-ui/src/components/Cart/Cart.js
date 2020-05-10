import React, {Component} from 'react'
import { connect } from 'react-redux';

const mapStatetotoProps = state => {
    const {cart} = state
    return {cart}
}

class Cart extends Component{
    render(){
        return(
            <div>
            <div>
                Total  {this.props.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}
            </div>

            <div>
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
        )
    }
}

export default connect(mapStatetotoProps)(Cart)