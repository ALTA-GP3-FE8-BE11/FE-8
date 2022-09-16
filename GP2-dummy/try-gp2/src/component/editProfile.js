import React from 'react'
import { Modal, Form } from "react-bootstrap";

const EditProfile = ({
    show,
    handleClose,
    handleEditName,
    handleEditEmail,
    handleEditPassword,
    handleEditAlamat,
    handleSubmit
}) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                style={{ width: "100%" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: "center" }}>
                        EDIT PROFIL
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Edit username"
                                onChange={(value) => handleEditName(value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Edit email"
                                onChange={(value) => handleEditEmail(value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Edit password"
                                onChange={(value) => handleEditPassword(value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Edit alamat"
                                onChange={(value) => handleEditAlamat(value)}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                    <div className='d-flex justify-content-end'>
                        <button onClick={handleSubmit}
                            style={{ padding: '5px', border: '1px solid gray', borderRadius: '8px' }}
                        >
                            Edit Profil
                        </button>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditProfile