import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DetailPermission = () => {
  const { id } = useParams();
  const [nameowner, setNameOwner] = useState("");
  const [namestaff, setNameStaff] = useState("");
  const [staticworkass, setStatic] = useState(0);
  const [idroom, setIdroom] = useState("");
  const [careername, setCareername] = useState();
  const [subject, setSubject] = useState();
  const [price, setPrice] = useState();
  const [describe, setDescribe] = useState();
  const [housenumberstreetname, setHousenumberstreetname] = useState();
  const [wardname, setWardname] = useState();
  const [districtname, setDistrictname] = useState();
  const [provincename, setProvincename] = useState();
  const [quantity, setQuantity] = useState();

  const [showImageRoom, setShowImageRoom] = useState();

  const [listImageRoom, setListImageRoom] = useState([]);

  const navigator = useNavigate();
  const loaddata = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/workassignment/${id}`
      )
      .then((res) => {
        setNameOwner(
          `${res.data.idroom.idaccount.firstname} ${res.data.idroom.idaccount.lastname}`
        );
        setNameStaff(
          `${res.data.idaccount.firstname} ${res.data.idaccount.lastname}`
        );
        setStatic(res.data.static);
        setIdroom(res.data.idroom._id);
        setShowImageRoom(res.data.idroom.mainimage);

        setCareername(res.data.idroom.idcareer.careername);
        setSubject(res.data.idroom.subject);
        setPrice(res.data.idroom.price);
        setDescribe(res.data.idroom.describe);
        setHousenumberstreetname(res.data.idroom.housenumberstreetname);
        setWardname(res.data.idroom.idward.wardname);
        setDistrictname(res.data.idroom.iddistrict.districtname);
        setProvincename(res.data.idroom.idprovince.provincename);
        setQuantity(res.data.idroom.quantity);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const loadimage = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/image/byroom/${idroom}`
      )
      .then((res) => {
        setListImageRoom(res.data);
      });
  };

  useEffect(() => {
    loadimage();
  }, [idroom]);

  const updatestatic = async () => {
    const load = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/workassignment/${id}`,
        {
          static: staticworkass,
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Đã cập nhật thành công!",
          showConfirmButton: true,
        }).then(() => {
          navigator(`/detailworkassignment/${id}`);
        });
      });
  };
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Thông tin chi tiết đơn duyệt</h4>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Mã đơn duyệt</label>
                        <input
                          type="text"
                          className="form-control"
                          value={id}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">
                          Tên người đề nghị đăng
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={nameowner}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Mã phòng</label>
                        <input
                          type="text"
                          className="form-control"
                          value={idroom}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">
                          Họ tên nhân viên kiểm duyệt
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={namestaff}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Trạng thái</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={staticworkass}
                          onChange={(e) => setStatic(e.target.value)}
                        >
                          <option value="0">Chờ duyệt</option>
                          <option value="1">Đã duyệt</option>
                        </select>
                      </div>
                      <Link
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={updatestatic}
                      >
                        Cập nhật
                      </Link>
                      <Link className="btn btn-light" to={"/workassignment"}>
                        Trở lại
                      </Link>
                    </form>
                    <h4 className="card-title mt-4">
                      Thông tin phòng cần duyệt
                    </h4>
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
                                                  setShowImageRoom(
                                                    item.filename
                                                  )
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
                                                        VNĐ/1h
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
                                        </div>
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
      </div>
      <Footer />
    </>
  );
};

export default DetailPermission;
