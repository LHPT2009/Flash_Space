import "./NewReset.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

const NewReset = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const email = jwtDecode(localStorage.getItem("passcode")).email;
  const resetpass = () => {
    if (password == passwordconfirm) {
      axios
        .post(`http://localhost:8000/auth/reset`, {
          email,
          password,
        })
        .then((item) => {
          Swal.fire({
            icon: "success",
            title: "Mật khẩu đã cập nhật!",
            text: "mời bạn đăng nhập lại",
            showConfirmButton: true,
          }).then((item) => {
            localStorage.clear();
            navigate("/login");
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "mật khẩu xác thực không đúng!",
        text: "mời bạn kiểm tra lại",
        showConfirmButton: true,
      });
    }
  };

  if (localStorage.getItem("confirm")) {
    return (
      <>
        <TopNav />
        <div
          className="bodynewreset"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        >
          <div class="container">
            <div class="cardlogin">
              <div class="row g-0">
                <div class="col-md-6">
                  <div
                    class="d-flex justify-content-center align-items-center"
                    style={{ height: "450px" }}
                  >
                    <div class="py-4 px-3 w-75">
                      <h4>Tạo mật khẩu mới</h4>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input3"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <label for="input3">Mật khẩu mới</label>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2 mb-2">
                        <div class="col-md-12">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input4"
                              onChange={(e) =>
                                setPasswordConfirm(e.target.value)
                              }
                              required
                            />
                            <label for="input4">Xác nhận lại mật khẩu</label>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <button
                            className="btn btn-primary w-100"
                            onClick={resetpass}
                          >
                            Tiếp tục
                          </button>
                        </div>
                      </div>
                      <div class="member mt-1">
                        <span>Bạn đã có tài khoản? </span>
                        <Link class="text-decoration-none" to={"/login"}>
                          Đăng Nhập
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="right-side-content-newreset">
                    <div
                      class="content d-flex flex-column"
                      style={{ top: "210px", left: "60px" }}
                    >
                      <h3 className="text-warning">FLASH SPACE</h3>
                      <h5>Ứng dụng thuê phòng nhanh chóng và tiện lợi</h5>
                    </div>
                    <div class="right-side">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>
                        <img src="https://i.imgur.com/kWmyZvb.jpg" />
                      </span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>
                        <img src="https://i.imgur.com/U0863iD.jpg" />
                      </span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="parallelogram">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return <Navigate to={"/reset"} />;
  }
};

export default NewReset;
