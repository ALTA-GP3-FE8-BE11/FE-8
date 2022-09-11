import React from "react";

const Jumbotrons = () => {
  return (
    <div>
      <h1
        className=""
        style={{
          marginTop: "5%",
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        KUTSUYA,Toko Online Sepatu
      </h1>
      <h1
        className=""
        style={{
          marginLeft: "32%",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Pria dan Wanita 100% Original
      </h1>
      <h5 className="" style={{ marginLeft: "37%" }}>
        barang dapat di tukar apa bila tidak sesuai pesanan, free ongkir
      </h5>
      <h5 className="" style={{ marginLeft: "37%" }}>
        untuk wilayah jabodetabek dan sekitarnya.
      </h5>
    </div>
  );
};

export default Jumbotrons;
