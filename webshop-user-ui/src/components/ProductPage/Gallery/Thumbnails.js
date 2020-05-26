import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import previous from '../Prodrecs/previous.png'
import next from '../Prodrecs/next.png'


export default class Thumbnails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pictures: this.props.pictures,
            startIndex: 0
        }

        this.viewFilter = this.viewFilter.bind(this)
    }


    changeIndex(index) {
        this.props.picChanger(index)
        this.setState({startIndex: 0})
    }

    viewFilter() {
        let arr = this.props.pictures.slice(this.state.startIndex, this.state.startIndex + 3)

        if (arr.length < 3) {

            if (Math.sign(this.state.startIndex) === -1) {
                let arr = this.props.pictures.slice(this.state.startIndex)
                let minusArr = this.props.pictures.slice(0, this.state.startIndex + 3)
                arr = [...arr, ...minusArr]

                return arr
            }

            let plusArr = this.props.pictures.slice(0, 3 - arr.length)
            arr = [...arr, ...plusArr]
        }
        return arr
    }

    stepper(direction) {
        switch (direction) {
            case 'next':
                if (this.state.startIndex > (this.state.pictures.length - 1) - 2) return (this.setState({ startIndex: 0 }))
                return this.setState({ startIndex: this.state.startIndex += 1 })

            case 'prev':
                if (this.state.startIndex < (this.state.pictures.length * - 1) + 2) return (this.setState({ startIndex: 0 }))
                return this.setState({ startIndex: this.state.startIndex -= 1 })

            default:
                break;
        }
    }

    render() {
        const imgStyle = { height: '30px', margin: 'auto' }
        const array = this.viewFilter()
        return (
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col sm={1}  >
                        <Row className="justify-content-center">
                            <img style={imgStyle} onClick={() => this.stepper('prev')} src={previous} />
                        </Row>
                    </Col>
                    <Col>
                        <Row className="align-items-center">
                            {
                                array.map((p, index) => {
                                    const imgPath = `http://localhost:3050${p.imagePath}`
                                    return (
                                        <Col>
                                            <Image onClick={() => this.changeIndex(p.index)} src={imgPath} style={{ heigth: '100px', width: '200px' }} thumbnail />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col sm={1}>
                        <Row className="justify-content-center">
                            <img style={imgStyle} onClick={() => this.stepper('next')} src={next} />
                        </Row>
                    </Col>
                </Row>

            </Container>


        )
    }
}