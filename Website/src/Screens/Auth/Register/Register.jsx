import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [check, setCheck] = useState("checkmail");
  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    if (password == repassword) {
      axios
        .post(`http://localhost:8000/auth/register`, {
          username,
          password,
          firstname,
          lastname,
          email,
          phonenumber,
          check,
        })
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: "Mã đã được gửi đi, mời bạn xác thực!",
            showConfirmButton: true,
          }).then(() => {
            navigate("/login");
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <TopNav />
      <div
        className="bodyregister"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div class="container">
          <div class="cardrgister">
            <div class="row g-0">
              <div class="col-md-6">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="py-4 px-3 w-75">
                    <form onSubmit={addUser}>
                      <h4>Đăng ký</h4>
                      <div class="row g-2 mt-1">
                        <div class="col-md-6">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input1"
                              required
                              onChange={(e) => setFirstname(e.target.value)}
                            />
                            <label for="input1">Họ</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input2"
                              required
                              onChange={(e) => setLastname(e.target.value)}
                            />
                            <label for="input2">Tên</label>
                          </div>
                        </div>
                      </div>
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
                      <div class="row mt-2 mb-2">
                        <div class="col-md-12">
                          <div class="input-field">
                            <input
                              class="form-control"
                              id="input4"
                              required
                              onChange={(e) => setRePassword(e.target.value)}
                            />
                            <label for="input4">Xác nhận mật khẩu</label>
                          </div>
                        </div>
                      </div>
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
                        <div class="row mt-2 mb-2">
                          <div class="col-md-12">
                            <div class="input-field">
                              <input
                                class="form-control"
                                id="input4"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <label for="input4">Email</label>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div class="row mt-2 mb-2">
                          <div class="col-md-12">
                            <div class="input-field">
                              <input
                                class="form-control"
                                id="input4"
                                value={phonenumber}
                                required
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                              <label for="input4">Số điện thoại</label>
                            </div>
                          </div>
                        </div>
                      )}
                      <span class="">Mật khẩu không được ý hơn 8 ký tự</span>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <button
                            class="btn btn-primary w-100 signup-button"
                            onClick={addUser}
                          >
                            Đăng ký
                          </button>
                        </div>
                      </div>
                      <div class="member mt-1">
                        <span>Bạn đã có tài khoản? </span>
                        <Link class="text-decoration-none" to={"/login"}>
                          Đăng Nhập
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-side-content-register">
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

export default Register;
