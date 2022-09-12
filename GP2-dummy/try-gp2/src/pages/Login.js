import React from 'react'
import { Button, Form } from 'react-bootstrap'
import logoGoogle from '../assets/google.png'
import logoFacebook from "../assets/facebook.png";
import logoTwitter from "../assets/twitter.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{backgroundColor: '#DCDCDC', paddingTop:'90px', paddingBottom:'90px'}}>
        <div className='container d-flex justify-content-center'>
            <div className='bg-light p-5' style={{width:'400px', borderRadius: '15px'}}>
                <div className='text-center pb-4'>
                    <h3>LOGIN</h3>
                    <h6>Please enter your email and password!</h6>
                </div>
                <Form className='d-grid justify-content-center gap-4 w-100'>
                    <Form.Control type='email' placeholder='Email' style={{width: '300px'}}/>
                    <Form.Control type='password' placeholder='Password'/>
                    <div className='mx-auto'>
                    <Button variant='secondary' style={{width:'100px'}}>Login</Button>
                    </div>
                </Form>
                <div className='d-flex justify-content-center pt-3 gap-5 pb-5'>
                    <img src={logoFacebook} width='30px'/>
                    <img src={logoTwitter} width='30px'/>
                    <img src={logoGoogle} width='30px'/>
                </div>
                <div className='text-center pt-3'>
                    Don't have an account? <Link to='/signup'>Sign up here</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login