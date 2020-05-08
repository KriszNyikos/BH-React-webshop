import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';

export default class Row extends Component {


    render() {
      //  let stockStyle = {backGroundColor: !this.props.row.quantity ? 'red' : (this.props.row.quantity < this.props.warn_at ? 'yellow' : '')} 
        return (

            <tr style={{backgroundColor: !this.props.row.quantity ? 'red' : (this.props.row.quantity < this.props.row.warn_at ? 'yellow' : '')}} id="products-row" >
                <td>{(this.props.row.imagePath != 'No image') ? <Image  src={'http://localhost:3050'+this.props.row.imagePath} alt="product-main" rounded/>: 'No main image'}</td> 
                <td>{this.props.row.sku}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.price}</td>
                <td>{this.props.row.quantity ? this.props.row.quantity : 'out of stock'}</td>
                <td><Link to={`/product/${this.props.row.sku}`}>Edit</Link></td>
            </tr>
        )
    }
}
