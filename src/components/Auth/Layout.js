import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './Layout.module.scss'
import logo from '../../assets/images/logo.png'
import { Outlet } from 'react-router-dom'



const Layout = (props) => {
    return (
        <div className={styles.mainDiv}>
            <Row>
                <Col xs={12} lg={6} md={6} className={styles.subDiv}>
                    <div className="text-center">
                        <img src={logo} height="70px"/>
                    </div>
                    <div className={styles.formGroup}>
                        {props.children}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Layout