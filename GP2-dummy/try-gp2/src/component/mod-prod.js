import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ModProd = ({
  show,
  handleSubmit,
  handleClose,
  handleNamaproduk,
  handleBrand,
  handleUkuran,
  handleGender,
  handleHarga,
  handleGambar,
  handleDeskripsi,
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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Nama Produk"
                onChange={(value) => handleNamaproduk(value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Nama brand"
                onChange={(value) => handleBrand(value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="Ukuran"
                onChange={(value) => handleUkuran(value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Gender pengguna"
                onChange={(value) => handleGender(value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="Harga"
                onChange={(value) => handleHarga(value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Url image"
                onChange={(value) => handleGambar(value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Deskripsi Produk</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(value) => handleDeskripsi(value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModProd;
