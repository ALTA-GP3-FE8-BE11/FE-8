import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Footer from '../component/footer'
import NavbarNav from '../component/navbar'

const ContactUs = () => {
  return (
    <div>
        <NavbarNav />
        <div style={{backgroundColor: '#DCDCDC'}}>
            <div className='container-fluid p-5'>
                <div className='bg-white' style={{borderRadius: '40px'}}>
                    <Row className='p-5'>
                        <Col md='12' lg='6' style={{borderRight: '1px solid gray'}}>
                            <div className='text-center'>
                                <h1>Our Contact</h1>
                                <h5 className='pt-3'>Email</h5>
                                <h6>Kutsuya@gmail.com</h6>
                                <h5 className='pt-3'>Contact</h5>
                                <h6>082123456789</h6>
                                <h5 className='pt-3'>Alamat</h5>
                                <h6>Citayem, Indonesia</h6>
                            </div>
                        </Col>
                        <Col md='12' lg='6'>
                            <div className='text-center'>
                                <h1>Hubungi Kami</h1>
                                <p className='text-left'>untuk info dan saran</p>
                                <div>
                                    <Form className='d-grid justify-content-center gap-4 w-100'>
                                        <Form.Control type='username' placeholder='Fullname' style={{width: '300px'}}/>
                                        <Form.Control type='email' placeholder='Email' style={{width: '300px'}}/>
                                        <Form.Control type='textarea' placeholder='Type here' style={{height: '100px'}}/>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs