import React, {Component} from 'react'
import {Container, Row, Col, Table} from 'react-bootstrap'
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
            <Container className="justify-content-center">
                 <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Items</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
            {this.state.orders.map((order, index) =>{
                return <Order key={index} order={order}/>
            })}
                        </tbody>
            </Table>
            </Container>
        )
    }
} 