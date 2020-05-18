import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'

export default class Order extends Component {

    constructor(props) {
        super()
    }



    render() {
        return (

    
                <tr>
                    <td>{this.props.order.id}</td>
                    <td>{this.props.order.cust_name}</td>
                    <td>
                    <ul>
                                {this.props.order.items.map((item, index) => {
                                    return (
                                    <li style={{listStyleType: 'none'}}>
                                        <Row className="justify-content-around">
                                            <div>{item.name}: </div>
                                            <div>{item.price}</div>
                                            <div>x {item.quantity}</div>
                                            <div>= {item.price*item.quantity} </div>
                                        </Row>
                                       
                                        </li>)

                                })}
                            </ul>
                    </td>
                    <td>{this.props.order.address}</td>
                    <td>{this.props.order.items.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0)} HUF</td>
                </tr>

        )
    }
} 