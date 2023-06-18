import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RoomDetail = () => {
  const { id } = useParams();
  const [staticworkass, setStatic] = useState(0);
  const [showImageRoom, setShowImageRoom] = useState();
  const [careername, setCareername] = useState();
  const [subject, setSubject] = useState();
  const [price, setPrice] = useState();
  const [describe, setDescribe] = useState();
  const [housenumberstreetname, setHousenumberstreetname] = useState();
  const [wardname, setWardname] = useState();
  const [districtname, setDistrictname] = useState();
  const [provincename, setProvincename] = useState();
  const [quantity, setQuantity] = useState();

  const navigator = useNavigate();

  const [listImageRoom, setListImageRoom] = useState([]);
  const loadroom = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/room/${id}`
      )
      .then((res) => {
        setCareername(res.data.idcareer.careername);
        setSubject(res.data.subject);
        setPrice(
          res.data.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })
        );
        setDescribe(res.data.describe);
        setHousenumberstreetname(res.data.housenumberstreetname);
        setWardname(res.data.idward.wardname);
        setDistrictname(res.data.iddistrict.districtname);
        setProvincename(res.data.idprovince.provincename);
        setQuantity(res.data.quantity);
        setShowImageRoom(res.data.mainimage);
        setStatic(res.data.static);
      });
  };

  useEffect(() => {
    loadroom();
  }, []);

  const loadimage = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/image/byroom/${id}`
      )
      .then((res) => {
        setListImageRoom(res.data);
      });
  };
  useEffect(() => {
    loadimage();
  }, [id]);

  const updatestatic = async () => {
    const load = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/room/${id}`,
        {
          static: staticworkass,
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Đã cập nhật trạng thái hoạt động!",
          showConfirmButton: true,
        }).then(() => {
          navigator(`/roomdetailadmin/${id}`);
        });
      });
  };

  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className=" page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className=" grid-margin stretch-card">
                <div className="container">
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
                                              src={`http://localhost:8000/singleimage/${showImageRoom}`}
                                              class="img-responsive"
                                              alt=""
                                              style={{ height: "400px" }}
                                            />
                                          </a>
                                        </div>
                                        <div class="thumbnail-images">
                                          {listImageRoom.map((item) => (
                                            <a
                                              href="#"
                                              class="theater"
                                              rel="group"
                                              hidefocus="true"
                                              onClick={(e) =>
                                                setShowImageRoom(item.filename)
                                              }
                                            >
                                              <img
                                                src={`http://localhost:8000/singleimage/${item.filename}`}
                                                alt=""
                                                style={{ height: "150px" }}
                                              />
                                            </a>
                                          ))}
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-md-5 d-flex flex-column">
                                      <header></header>
                                      <div class="flex-grow-1">
                                        <div class="product-info">
                                          <div class="wp-block property list no-border">
                                            <div class="wp-block-content clearfix">
                                              <div class="col-sm-12 d-flex flex-column text-black">
                                                <div
                                                  class="card-body"
                                                  style={{ padding: "15px" }}
                                                >
                                                  <small>{careername}</small>
                                                  <h4 class="card-title">
                                                    {subject}
                                                  </h4>
                                                  <span class="pull-left">
                                                    <span class="price">
                                                      {price}
                                                    </span>
                                                    <span class="period">
                                                      /1h
                                                    </span>
                                                  </span>
                                                  <p class="card-text">
                                                    {describe}
                                                  </p>
                                                  <i class="fa fa-user"></i>{" "}
                                                  {quantity}
                                                </div>
                                                <div
                                                  class="footer"
                                                  style={{ padding: "15px" }}
                                                >
                                                  <small class="text-muted">
                                                    {housenumberstreetname +
                                                      ", " +
                                                      wardname +
                                                      ", " +
                                                      districtname +
                                                      ", " +
                                                      provincename}
                                                  </small>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <label for="exampleInputEmail1">
                                          Trạng thái
                                        </label>
                                        <select
                                          class="form-select"
                                          aria-label="Default select example"
                                          value={staticworkass}
                                          onChange={(e) =>
                                            setStatic(e.target.value)
                                          }
                                        >
                                          <option value="0">
                                            Tạm dừng hoạt động
                                          </option>
                                          <option value="1">
                                            Đang hoạt động
                                          </option>
                                        </select>
                                      </div>
                                      <footer>
                                        <Link
                                          type="submit"
                                          className="btn btn-primary me-2"
                                          onClick={updatestatic}
                                        >
                                          Cập nhật
                                        </Link>
                                        <Link
                                          className="btn btn-light"
                                          to={"/roomadmin"}
                                        >
                                          Trở lại
                                        </Link>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomDetail;
