import React from "react";
import Navbar from "../component/navbar";
import Carted from "../component/carted";

const HistoryCarts = () => {
  return (
    <>
      <Navbar />
      <Carted />
      <div className="pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-muted rounded shadow-lg mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-2 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-2 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-2 bg-light">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" className="border-2 bg-light">
                        <div className="py-2 text-uppercase">Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="border-2">
                        <div className="p-2">
                          <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">
                              <a href="/" className="text-dark">
                                Nike biasa aja
                              </a>
                            </h5>
                          </div>
                        </div>
                      </th>
                      <td className="border-2 align-middle">
                        <strong>Rp.2.500.000</strong>
                      </td>
                      <td className="border-2 align-middle">
                        <strong>1</strong>
                      </td>
                      <td className="border-2 align-middle">
                        <strong>Success</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="border-2">
                        <div className="p-2">
                          <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">
                              <a href="/" className="text-dark">
                                Nike ga biasa
                              </a>
                            </h5>
                          </div>
                        </div>
                      </th>
                      <td className="border-2 align-middle">
                        <strong>Rp.2.500.000</strong>
                      </td>
                      <td className="border-2 align-middle">
                        <strong>1</strong>
                      </td>
                      <td className="border-2 align-middle">
                        <strong>Success</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="border-2">
                        <div className="p-2">
                          <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">
                              <a
                                href="
                                  /"
                                className="text-dark"
                              >
                                Nike biasa kw
                              </a>
                            </h5>
                          </div>
                        </div>
                      </th>
                      <td className="border-2 align-middle">
                        <strong>Rp.2.500.000</strong>
                      </td>
                      <td className="border-2 align-middle">
                        <strong>1</strong>
                      </td>
                      <td className="border-2 align-middle">
                        <strong>Success</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <div className="ml-3 d-inline-block align-middle">
                            <h5 className="mb-0">
                              <a
                                href="
                                  /"
                                className="text-dark"
                              >
                                Nike super kw
                              </a>
                            </h5>
                          </div>
                        </div>
                      </th>
                      <td className="border-0 align-middle">
                        <strong>Rp.2.500.000</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <strong>1</strong>
                      </td>
                      <td className="border-0 align-middle">
                        <strong>Success</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer />; */}
    </>
  );
};

export default HistoryCarts;
