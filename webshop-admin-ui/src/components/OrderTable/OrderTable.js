import React, {Component} from 'react'
import {Container} from 'react-bootstrap'
import Order from './Order'


export default class OrderTable extends Component{
    
    constructor(){
        super()
        this.state = {orders: []}
    }

    componentDidMount(){
        fetch('http://localhost:3050/orders', { method: 'GET'})
        .then(res => res.json())
        .then(res => {
            this.setState({orders: res})
        })
    }

    render(){
        return(
            <Container>
            {this.state.orders.map((order, index) =>{
                return <Order key={index} order={order}/>
            })}
            </Container>
        )
    }
} 