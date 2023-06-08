import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const Auth = await axios
        .post(`http://localhost:8000/auth/login`, { username, password })
        .catch((err) => {
          console.log(err);
        });
      if (Auth) {
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "center-end",
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.addEventListener("mouseenter", Swal.stopTimer);
        //     toast.addEventListener("mouseleave", Swal.resumeTimer);
        //   },
        // });

        Swal.fire({
          icon: "success",
          title: "Bạn đã đăng nhập thành công!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (swal) => {
            swal.addEventListener("mouseenter", Swal.stopTimer);
            swal.addEventListener("mouseleave", Swal.resumeTimer);
          },
        }).then(() => {
          localStorage.setItem("token", Auth.data.accessToken);
          navigate("/");
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TopNav />
      <div
        className="bodylogin"
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
                    <h4>Đăng nhập</h4>
                    <form onSubmit={loginUser}>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input3"
                              required
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <label for="input3">Tài khoản</label>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2 mb-2">
                        <div class="col-md-12">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input4"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label for="input4">Mật khẩu</label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="row mt-2">
                      <div class="col-md-12">
                        <button
                          class="btn btn-primary w-100 signup-button"
                          onClick={loginUser}
                        >
                          Đăng nhập
                        </button>
                      </div>
                    </div>
                    <div class="member mt-1">
                      <span>Tạo một tài khoản? </span>
                      <Link class="text-decoration-none" to={"/register"}>
                        Đăng ký
                      </Link>
                    </div>
                    <div class="member mt-1">
                      <span>Quên mật khẩu? </span>
                      <Link class="text-decoration-none" to={"/reset"}>
                        Lấy lại mật khẩu
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-side-content-login">
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
};

export default Login;
