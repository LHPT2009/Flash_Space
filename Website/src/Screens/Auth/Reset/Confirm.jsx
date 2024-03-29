import "./Confirm.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import jwtDecode from "jwt-decode";
const Confirm = () => {
  const navigate = useNavigate();
  const [passcode, setPassCode] = useState("");
  const check = () => {
    if (jwtDecode(localStorage.getItem("passcode")).passcode == passcode) {
      localStorage.setItem("confirm", 1);
      navigate("/newreset");
    } else {
      alert("sai code!!!");
      console.log(jwtDecode(localStorage.getItem("passcode")).passcode);
      console.log(passcode);
    }
  };
  if (localStorage.getItem("passcode")) {
    return (
      <>
        <TopNav />
        <div
          className="bodyconfirm"
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
                      <h4>Xác nhận mã Code</h4>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <div class="input-field">
                            <input
                              class="form-control"
                              onChange={(e) => setPassCode(e.target.value)}
                              required
                            />
                            <label for="input3">Code được gửi cho bạn</label>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <button
                            className="btn btn-primary w-100"
                            // to={"/newreset"}
                            onClick={check}
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
                  <div class="right-side-content-confirm">
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

export default Confirm;
