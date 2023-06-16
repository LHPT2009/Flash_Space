import "./Reset.css";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [check, setCheck] = useState("checkmail");

  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Chờ trong giây lát!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (swal) => {
        swal.addEventListener("mouseenter", Swal.stopTimer);
        swal.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    await axios
      .post(`http://localhost:8000/auth/sendcodereset`, {
        email,
        phonenumber,
        check,
      })
      .then((item) => {
        localStorage.setItem("passcode", item.data);
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
                      <div class="row mt-2 mb-2">
                        <div class="col-md-12">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                              onChange={(e) => {
                                setCheck("checkmail");
                                setPhoneNumber("");
                              }}
                            />
                            <label class="form-check-label" for="inlineRadio1">
                              Email
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="option2"
                              onChange={(e) => {
                                setCheck("checkphonenumber");
                                setEmail("");
                              }}
                            />
                            <label class="form-check-label" for="inlineRadio2">
                              số điện thoại
                            </label>
                          </div>
                        </div>
                      </div>
                      {check == "checkmail" ? (
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
                      ) : (
                        <div class="row mt-2">
                          <div class="col-md-12">
                            <div class="input-field">
                              <input
                                class="form-control"
                                id="input3"
                                required
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                              <label for="input3">Số điện thoại</label>
                            </div>
                          </div>
                        </div>
                      )}
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
