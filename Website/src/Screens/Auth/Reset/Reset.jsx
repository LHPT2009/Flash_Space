import "./Reset.css";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";

const Reset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/auth/sendcoderesetbymail`, {
        email,
      })
      .then(function (response) {
        console.log(response);
        navigate("/confirm");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <TopNav />
      <div
        className="bodyreset"
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
                    <h4>Lấy lại tài khoản</h4>
                    <form onSubmit={resetPassword}>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input3"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label for="input3">Email</label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="row mt-2">
                      <div class="col-md-12">
                        <button
                          className="btn btn-primary w-100"
                          onClick={resetPassword}
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
                <div class="right-side-content-reset">
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

export default Reset;
