import React from 'react'
import { Button, Col, ListGroup, ListGroupItem, Row, Tab, Tabs } from 'react-bootstrap'
import Cards from '../component/card'
import Footer from '../component/footer'
import NavbarNav from '../component/navbar'
import '../style/productpage.css'


const Product = () => {
  return (
    <div>
        <NavbarNav />
        <div className='container-fluid d-flex gap-3 p-3'>
            <Row className='w-100 pb-3 pt-3'>
                <Col xs={12} md='2'>
                    <div className='pb-3'>
                        <ListGroup>
                            <ListGroup.Item>Pria</ListGroup.Item>
                            <ListGroup.Item>Wanita</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col xs={12} md='10'>
                    <div className='d-flex flex-wrap justify-content-center gap-3 container-content'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </Col>
            </Row>
        </div>
        <Footer />
    </div>
  )
}

export default Product