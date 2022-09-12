import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Form, Modal } from "react-bootstrap";

const ModalMod = ({ show, handleClose }) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledly='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header className='d-flex justify-content-center' style={{ height: '180px', backgroundColor: '#00001C', textAlign: 'center' }}>
                    <Modal.Title>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '130px', textAlign: 'center', color: 'white' }} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '120px', textAlign: 'center' }}>
                    <h2>Success!</h2>
                    <p style={{ marginTop: '15px' }}>Your payment has been verified</p>
                </Modal.Body>
                <div className="d-flex justify-content-center pb-4">
                    <Button variant="secondary" onClick={handleClose} className='w-50'>
                        Back to product page
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalMod