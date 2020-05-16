import React, { Component } from 'react'
import Thumbnails from './Thumbnails'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { connect } from 'react-redux';


  const mapStateToProps = (state, props) => {
    const{sku} = props
    const {pictures} = state.cartReducer
    const picObj = pictures.filter(p => p.sku === sku)[0]
    return { picObj }
}



class Gallery extends Component {

    constructor(props){
        super(props)
        console.log(this.props.picObj)
        this.state = {pictures: this.props.picObj.picArr, bigPixIndex: this.props.picObj.main || 0}
        this.picChanger = this.picChanger.bind(this)
    }

    picChanger(index){
        this.setState({bigPixIndex : index})
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image style={{height: "200px"}} src={this.state.pictures[this.state.bigPixIndex]} rounded />
                    </Col>
                </Row>
                <Row>
                    <Thumbnails picChanger={this.picChanger} pictures={this.state.pictures}/>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Gallery)