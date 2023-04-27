import "./InfoUser.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import "./InfoUser.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import imageicon from "../../../../../uploads/iconAccount.png";
const InfoUser = () => {
  const [info, setInfo] = useState([]);
  const [pathimage, setPathImage] = useState();

  const navigate = useNavigate();

  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/account/${jwt(localStorage.getItem("token")).id}`
    )
    .then((res) => {
      setInfo(res.data);
    });

  const editInfo = async (e) => {
    e.preventDefault();
    const add = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/product`,
        { pathimage },
        { headers: { "content-type": "multipart/form-data" } }
      )
      .then((res) => {
        navigate("/infouser");
      })
      .catch((res) => {
        alert(res);
      });
  };

  return (
    <>
      <TopNav />
      <div className="bodyinfouser">
        <div class="container">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar">
                        {pathimage ? (
                          <img
                            src={URL.createObjectURL(pathimage)}
                            alt="Maxwell Admin"
                          />
                        ) : (
                          <img src={imageicon} alt="Maxwell Admin" />
                        )}
                      </div>
                      <div>
                        <label for="file" className="btn btn-primary">
                          Chọn ảnh cập nhật
                        </label>
                        <input
                          id="file"
                          style={{ visibility: "hidden" }}
                          type="file"
                          accept=".png"
                          onChange={(e) => setPathImage(e.target.files[0])}
                        />
                      </div>
                      <h5 class="user-name">
                        {info.firstname + " " + info.lastname}
                      </h5>
                      <h6 class="user-email">{info.email}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <form>
                <div class="card h-100">
                  <div class="card-body">
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">
                          Thông tin chi tiết người dùng
                        </h6>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="fullName">Họ và tên</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fullName"
                            placeholder="Enter full name"
                            value={info.firstname}
                            // onChange={(e) => setPathImage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="fullName">Họ và tên</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fullName"
                            placeholder="Enter full name"
                            value={info.lastname}
                            // onChange={(e) => setPathImage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="eMail">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="eMail"
                            placeholder="Enter email ID"
                            value={info.email}
                            // onChange={(e) => setPathImage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="phone">Số điện thoại</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            value={info.phonenumber}
                            // onChange={(e) => setPathImage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="website">Giới tính</label>
                          <input
                            type="url"
                            class="form-control"
                            id="website"
                            placeholder="Nam"
                            value={info.sex}
                            // onChange={(e) => setPathImage(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            class="btn btn-secondary m-1"
                          >
                            Trở lại
                          </button>
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            class="btn btn-primary m-1"
                          >
                            Cập nhật
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoUser;
