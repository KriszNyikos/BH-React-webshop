import React, { Component } from 'react'
import Thumbnails from './Thumbnails'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { connect } from 'react-redux';


  const mapStateToProps = (state, props) => {
    const{sku} = props
    const {pictures} = state.cartReducer
    const picArr = pictures.filter(p => p.sku === sku)
    const primary = picArr.findIndex(p=> p.isPrimary === 1)
    return { picArr, primary }
}



class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {pictures: this.props.picArr, bigPixIndex: (this.props.primary === -1) ? 0 : this.props.primary }
        this.picChanger = this.picChanger.bind(this)
    }

    picChanger(index){
        this.setState({bigPixIndex : index})
    }

    render() {
        const imgPath = `http://localhost:3050${this.state.pictures[this.state.bigPixIndex].imagePath}`
        return (

            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image style={{height: "200px"}} src={imgPath} rounded />
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