import React, {Component} from 'react'
import HeaderCart from './HeaderCart/HeaderCart'

import styles from './Header.module.css'

export default class Header extends Component{
    render(){
        return(
            <div className={styles.headerBody}>
                <img src='#' alt="logo"/>
                <h3>My webshop</h3>
                <HeaderCart/>
            </div>
        )
    }
}