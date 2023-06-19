import "./Order.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ListTimeSlotContext } from "../../../context/ListTimeSlotContext";
import { useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

const Order = () => {
  const navigator = useNavigate();
  const id = jwtDecode(localStorage.getItem("token")).id;
  const { timeslots, deleteitem } = useContext(ListTimeSlotContext);
  const [account, setAccount] = useState([]);
  const [sum, setSum] = useState(0);

  const [pageotp, setPageOTP] = useState(false);
  const [pageotptwo, setPageOTPtwo] = useState(false);
  const [check, setCheck] = useState("");
  const [inputotp, setInputOTP] = useState("");

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account/${id}`
      )
      .then((res) => {
        setAccount(res.data);
      });
  }, []);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  useEffect(() => {
    let sum = 0;
    timeslots.forEach((item) => {
      sum = sum + item.pricetime;
      setSum(item.pricetime);
    });
    setSum(sum);
  }, [timeslots]);

  const addorder = async () => {
    const idaccount = id;
    const total = sum;
    if (inputotp == jwtDecode(localStorage.getItem("otp")).otp) {
      const add = await axios
        .post(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/bookingroom`,
          { idaccount, timeslots, total }
        )
        .then((item) => {
          Swal.fire({
            icon: "success",
            title: "Cảm ơn đã sử dụng dịch vụ!",
            text: "Mời bạn về trang chủ",
            showConfirmButton: true,
          }).then(() => {
            localStorage.removeItem("otp");
            navigator("/");
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: error,
            showConfirmButton: true,
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Mã OTP sai!",
        text: "Mời bạn kiểm tra lại",
        showConfirmButton: true,
      });
    }
  };

  const changepage = () => {
    setPageOTP(!pageotp);
  };

  const changepagetwo = () => {
    setPageOTPtwo(!pageotptwo);
  };

  const sendOTP = async () => {
    const send = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/otp`,
        {
          check,
          idacc: id,
        }
      )
      .then((item) => {
        Swal.fire({
          icon: "success",
          title: "Mã xác thực đã được gửi!",
          text: "Chờ trong giây lát",
          showConfirmButton: true,
        }).then(() => {
          setPageOTPtwo(!pageotptwo);
        });
        localStorage.setItem("otp", item.data);
      });
  };
  return (
    <>
      {!pageotp ? (
        <>
          <TopNav />
          <div className="bodydth">
            <div class="container">
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="card" style={{ height: "800px" }}>
                    <div class="card-header text-black">
                      Kiểm tra thông tin của bạn trước khi xác nhận đặt phòng
                    </div>
                    <div class="card-body p-0">
                      <div class="invoice-container">
                        <div class="invoice-header">
                          <div class="row gutters">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-start">
                              <a
                                href="index.html"
                                class="btn"
                                style={{ fontSize: "30px", color: "#FFC107" }}
                              >
                                FLASH SPACE
                              </a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                              <address class="text-end text-black">
                                435 Điện biên Phủ , phường 11, Quận Bình Thạnh
                                <br />
                                Hồ chí Minh, Việt Nam
                                <br />
                                123123123123
                              </address>
                            </div>
                          </div>
                          <div class="row gutters">
                            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                              <div class="invoice-details">
                                <address className="text-black">
                                  {account.firstname + " " + account.lastname}
                                  <br />
                                  {account.email}
                                  <br />
                                  {account.phonenumber}
                                </address>
                              </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                              <div class="invoice-details">
                                <div class="invoice-num text-black">
                                  <div>
                                    Ngày {day} tháng {month} năm {year}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="invoice-body">
                          <div class="row gutters">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                              <div class="table-responsive">
                                <table class="table custom-table m-0">
                                  <thead>
                                    <tr>
                                      <th>Tên phòng</th>
                                      <th>Ngày đặt</th>
                                      <th>Bắt đầu</th>
                                      <th>kết thúc</th>
                                      <th>giá tiền</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {timeslots.map((item) => (
                                      <tr>
                                        <td>{item.roomname}</td>
                                        <td>{item.date}</td>
                                        <td>{item.starttime}</td>
                                        <td>{item.endtime}</td>
                                        <td>
                                          {item.pricetime.toLocaleString(
                                            "vi-VN",
                                            {
                                              style: "currency",
                                              currency: "VND",
                                            }
                                          )}
                                        </td>
                                        <td>
                                          <button
                                            className="btn btn-warning btn-lg btn-radius"
                                            onClick={() =>
                                              deleteitem(item.idworkinghours)
                                            }
                                          >
                                            Hủy
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                    <tr>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>

                                      <td colspan="2">
                                        <h5 class="text-black">
                                          <strong>Tổng tiền</strong>
                                        </h5>
                                      </td>
                                      <td>
                                        <h5 class="text-black">
                                          <strong>
                                            {sum.toLocaleString("vi-VN", {
                                              style: "currency",
                                              currency: "VND",
                                            })}
                                          </strong>
                                        </h5>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <Link
                        to={"/infouser"}
                        className="btn btn-primary btn-lg btn-radius m-1"
                      >
                        Thay đổi thay tin cá nhân
                      </Link>
                      <button
                        className="btn btn-success btn-lg btn-radius m-1"
                        onClick={changepage}
                      >
                        tiếp tục
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <TopNav />
          <div className="bodydth">
            <div class="container">
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div
                    class="card"
                    // style={{ height: "800px" }}
                  >
                    <div class="card-header text-black">Xác thực OTP</div>
                    <div class="card-body p-0">
                      <div
                        class="container w-100"
                        style={{ marginTop: "15px" }}
                      >
                        <div class="card text-center">
                          <div class="card-header p-5">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/421/421648.png"
                              height="150px"
                              width="150px"
                              className="mb-2"
                            />
                            <h5 class="mb-2">XÁC THỰC OTP</h5>
                          </div>
                          {!pageotptwo ? (
                            <div>
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
                                      }}
                                    />
                                    <label
                                      class="form-check-label"
                                      for="inlineRadio1"
                                    >
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
                                      }}
                                    />
                                    <label
                                      class="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      số điện thoại
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="mt-3 mb-5">
                                <button
                                  class="btn btn-success px-4 verify-btn"
                                  onClick={sendOTP}
                                >
                                  gửi mã xác thực OTP
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div class="input-container d-flex flex-row justify-content-center mt-2">
                                <input
                                  type="text"
                                  class="m-1 text-center form-control rounded"
                                  maxlength="5"
                                  onChange={(e) => setInputOTP(e.target.value)}
                                />
                              </div>
                              <small>
                                Không nhận được mã OTP{" "}
                                <a
                                  href="#"
                                  class="text-decoration-none"
                                  onClick={changepagetwo}
                                >
                                  Gửi lại
                                </a>
                              </small>
                              <div class="mt-3 mb-5">
                                <button
                                  class="btn btn-success px-4 verify-btn"
                                  onClick={addorder}
                                >
                                  Kiểm tra
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <button
                        // to={"/"}
                        className="btn btn-success btn-lg btn-radius m-1"
                        onClick={changepage}
                      >
                        trở lại
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Order;
