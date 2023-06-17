import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const clientId =
    "274010756034-p6lifcugpjfclvj4m90p8mm7ssg3d5e3.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      if (token != "") {
        const Auth = await axios
          .post(`http://localhost:8000/auth/login`, { username, password })
          .catch((err) => {
            Swal.fire({
              icon: "warning",
              title: "Tài khoản hoặc mật khẩu bị sai!!!",
              showConfirmButton: true,
            });
          });
        if (Auth) {
          if (Auth.data.emailverification == false) {
            Swal.fire({
              icon: "warning",
              title: "Bạn vẫn chưa xác thực thông tin!",
              showConfirmButton: true,
            });
          } else {
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
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Bạn chưa xác nhận RECAPTCHA!",
          showConfirmButton: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const responseGoogle = async (response) => {
    try {
      const Auth = await axios
        .post(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/auth/logingoogle`,
          {
            email: response.profileObj.email,
            firstname: response.profileObj.familyName
              ? response.profileObj.familyName
              : "",
            lastname: response.profileObj.givenName
              ? response.profileObj.givenName
              : "",
          }
        )
        .then((item) => {
          Swal.fire({
            icon: "success",
            title: "Đăng nhập tài khoản!",
            showConfirmButton: true,
          }).then(() => {
            localStorage.setItem("token", item.data.accessToken);
            navigate("/");
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "warning",
            title: "Tài khoản hoặc mật khẩu bị sai!!!",
            showConfirmButton: true,
          });
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đăng nhập đã bị gian đoạn!",
        showConfirmButton: true,
      });
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
                        <ReCAPTCHA
                          sitekey={"6LeTsqYmAAAAABMelNSGlU6nCkMDJuxzSM_qgn3g"}
                          onChange={(token) => {
                            setToken(token);
                          }}
                        />
                      </div>
                    </div>
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
                    <div class="row mt-2">
                      <div class="col-md-12">
                        <GoogleLogin
                          clientId={clientId}
                          buttonText="Đăng nhập bằng Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                        />
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
