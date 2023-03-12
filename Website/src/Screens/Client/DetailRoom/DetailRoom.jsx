import React, { useState } from "react";
import "./DetailRoom.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import Rating from "../../../components/Rating/Rating";

const DetailRoom = () => {
  const [data, setDate] = useState();
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1380&t=st=1678295624~exp=1678296224~hmac=cbb45e284685629edd695cb6091788db3ccb5f4743aa42779b112506e3313e13"
  );
  return (
    <div>
      <TopNav />
      <div className="bodydr">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="estate">
                    <div class="container bootstrap snippets bootdey">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="row">
                            <div class="col-md-7">
                              <div class="product-gallery">
                                <div class="thumbnail-images">
                                  <a
                                    href="#"
                                    class="theater"
                                    rel="group"
                                    hidefocus="true"
                                  >
                                    <img
                                      src={image}
                                      class="img-responsive"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div class="thumbnail-images">
                                  <a
                                    href="#"
                                    class="theater"
                                    rel="group"
                                    hidefocus="true"
                                  >
                                    <img
                                      src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1380&t=st=1678295624~exp=1678296224~hmac=cbb45e284685629edd695cb6091788db3ccb5f4743aa42779b112506e3313e13"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    class="theater"
                                    rel="group"
                                    hidefocus="true"
                                  >
                                    <img
                                      src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1380&t=st=1678295624~exp=1678296224~hmac=cbb45e284685629edd695cb6091788db3ccb5f4743aa42779b112506e3313e13"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    class="theater"
                                    rel="group"
                                    hidefocus="true"
                                  >
                                    <img
                                      src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1380&t=st=1678295624~exp=1678296224~hmac=cbb45e284685629edd695cb6091788db3ccb5f4743aa42779b112506e3313e13"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    class="theater"
                                    rel="group"
                                    hidefocus="true"
                                  >
                                    <img
                                      src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=1380&t=st=1678295624~exp=1678296224~hmac=cbb45e284685629edd695cb6091788db3ccb5f4743aa42779b112506e3313e13"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-5 d-flex flex-column">
                              <header></header>
                              <div class="flex-grow-1">
                                <div class="product-info">
                                  <h3>181/7 Liên tỉnh 5, Phường 5, Quận 8</h3>
                                  <div class="wp-block property list no-border">
                                    <div class="wp-block-content clearfix">
                                      <small>Văn phòng</small>
                                      <h4 class="content-title">
                                        Phòng họp cho công ty
                                      </h4>
                                      <span class="pull-left">
                                        <span class="price">250.000</span>
                                        <span class="period">VNĐ/1h</span>
                                      </span>
                                    </div>
                                    <div class="wp-block-footer style2 mt-15">
                                      <ul class="aux-info">
                                        <li>
                                          <i class="fa fa-building"></i>2300 Sq
                                          Feet
                                        </li>
                                        <li>
                                          <i class="fa fa-user"></i> 5 Bedrooms
                                        </li>
                                        <li>
                                          <i class="fa fa-tint"></i> 2 Bathrooms
                                        </li>
                                        <li>
                                          <i class="fa fa-car"></i> 3 Garages
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <span class="clearfix"></span>
                                </div>
                                <input
                                  type="date"
                                  onChange={(e) => setDate(e.target.value)}
                                  className="form-control"
                                  style={{
                                    width: "100%",
                                    height: "40px",
                                    padding: "10px",
                                    marginBottom: "20px",
                                    fontSize: "20px",
                                    textAlign: "center",
                                  }}
                                />

                                <button
                                  type="button"
                                  class="btn btn-secondary btn-lg btn-radius"
                                  style={{
                                    marginRight: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  10:00 {"->"} 11:00
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-success btn-lg btn-radius"
                                  style={{
                                    marginRight: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  11:00 {"->"} 12:00
                                </button>

                                <button
                                  type="button"
                                  class="btn btn-warning btn-lg btn-radius"
                                  style={{
                                    marginRight: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  13:00 {"->"} 14:00
                                </button>
                              </div>
                              <footer>
                                <button
                                  type="button"
                                  class="btn btn-primary btn-lg btn-radius"
                                  style={{
                                    width: "100%",
                                    fontSize: "20px",
                                  }}
                                >
                                  Đặt lịch
                                </button>
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <h3 class="box-title mt-5">THÔNG TIN CHI TIẾT</h3>
                  <div class="table-responsive">
                    <table class="table table-striped table-product">
                      <tbody>
                        <tr>
                          <td width="390">Tên</td>
                          <td>Số lượng</td>
                        </tr>
                        <tr>
                          <td>Máy lạnh</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>Ghế</td>
                          <td>6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Rating />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailRoom;
