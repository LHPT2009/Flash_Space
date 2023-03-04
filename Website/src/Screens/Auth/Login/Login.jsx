import { Link } from "react-router-dom";
import "./Login.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";

const Login = () => {
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
                    <div class="row mt-2">
                      <div class="col-md-12">
                        <div class="input-field">
                          <input class="form-control" id="input3" required />
                          <label for="input3">Tài khoản</label>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-2 mb-2">
                      <div class="col-md-12">
                        <div class="input-field">
                          <input class="form-control" id="input4" required />
                          <label for="input4">Mật khẩu</label>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-md-12">
                        <button class="btn btn-primary w-100 signup-button">
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
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-side-content-login">
                  <div class="content d-flex flex-column">
                    <h3>FLASH SPACE</h3>
                    <span>
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </span>
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
