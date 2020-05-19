import React, { Component } from 'react'
import Thumbnails from './Thumbnails'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { connect } from 'react-redux';


  const mapStateToProps = (state, props) => {
    const{sku} = props
    const {pictures} = state.cartReducer
    const picArr = pictures.filter(p => p.sku === sku)
    const primary = pictures.findIndex(p=> p.isPrimary === 1)
    return { picArr, primary }
}



class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {bigPixIndex: (this.props.primary === -1) ? 0 : this.props.primary }
        this.picChanger = this.picChanger.bind(this)
        this.picObjCreator = this.picObjCreator.bind(this)
    }

    picChanger(index){
        this.setState({bigPixIndex : index})
    }

    picObjCreator(){
        let pics = this.props.picArr.map((p, index) => {
            return {...p, index}
        })

        return pics

    }

    render() {
        const imgPath = `http://localhost:3050${this.props.picArr[this.state.bigPixIndex].imagePath}`
        return (

            <Container>
                <Row className="justify-content-center">
                        <Image style={{height: "300px", width: '500px'}} src={imgPath} rounded />
                </Row>
                <Row>
                    <Thumbnails picChanger={this.picChanger} pictures={this.picObjCreator()}/>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Gallery)