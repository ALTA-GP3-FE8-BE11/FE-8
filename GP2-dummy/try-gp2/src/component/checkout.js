
import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faMinusCircle, faPlus, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
    return (
        <div>
            <Row>
                <Col lg='4'>
                    <div className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faPlusCircle} style={{ fontSize: '1.736vw' }} />
                        <div className='px-3'><h5>2</h5></div>
                        <FontAwesomeIcon icon={faMinusCircle} style={{ fontSize: '1.736vw' }} />
                    </div>
                </Col>
                <Col lg='8'>
                    <h5>Sneakers Aventador</h5>
                    <p>Rp 6.000.000</p>
                </Col>
            </Row>
            <Row>
                <Col lg='4'>
                    <div className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faPlusCircle} style={{ fontSize: '1.736vw' }} />
                        <div className='px-3'><h5>2</h5></div>
                        <FontAwesomeIcon icon={faMinusCircle} style={{ fontSize: '1.736vw' }} />
                    </div>
                </Col>
                <Col lg='8'>
                    <h5>Sneakers Aventador</h5>
                    <p>Rp 6.000.000</p>
                </Col>
            </Row>
        </div>
    )
}

export default Checkout