import React, {Component} from 'react'
import {Container, Row, Colt} from 'react-bootstrap'

export default class Order extends Component{
    
    constructor(props){
        super()
    }



    render(){
        return(
        <Row>
            <Row>
                id {this.props.order.id}, customer name: {this.props.order.cust_name}  adress: {this.props.order.adress}
            </Row>
            <Row>
                <ul>
                {this.props.order.items.map((item, index)=>{
                   return <li>{item.name}  {item.price} {item.quantity} </li>
                })}
                </ul>
            </Row>
        </Row>
        )
    }
} 