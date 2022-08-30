import styles from './Home.module.scss'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import Login from '../../components/Auth/Login'
import Register from '../../components/Auth/Register'



const Home = ({logo}) => {
    return (
        <Row className={styles.mainDiv}>
            <Col xs={12} lg={6} md={6} className={styles.subDiv}>
                <div className="text-center">
                    <img src={logo} height="70px"/>
                </div>
                <div className={styles.formGroup}>
                    <Login/>
                    {/* <Register/> */}
                </div>
            </Col>
        </Row>
    )
}

export default Home