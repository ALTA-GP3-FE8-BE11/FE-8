import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import Footer from '../component/footer'
import NavbarNav from '../component/navbar'
import sepatu from "../assets/sepatu.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Cart from '../component/cart';
import Checkout from '../component/checkout';
import Modal from '../component/modal';
import ModalMod from '../component/modal';

const MyCart = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <NavbarNav />
            <Container fluid className='p-5'>
                <h3>My Cart</h3>
                <div className='pt-3'>
                    <Row>
                        <Col md={12} lg='8'>
                            <div>
                                <Cart />
                            </div>
                        </Col>
                        <Col md={12} lg='4'>
                            <div className='px-3' style={{ border: '1px solid gray' }}>
                                <h5 className='pt-3'>Checkout</h5>
                                <div className='container pt-3'>
                                    <Checkout />
                                </div>
                                <div className='pt-5 pb-3 d-flex justify-content-center'>
                                    <Button className='w-75' variant='secondary' onClick={handleShow}>Bayar</Button>
                                    <ModalMod
                                        show={show}
                                        handleClose={handleClose}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default MyCart