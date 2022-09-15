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
                        TAMBAH PRODUK
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
                    <button variant="primary" onClick={handleSubmit}>
                        Add Product
                    </button>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditProfile