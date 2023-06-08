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
  const { timeslots, editListTimeSlot, deleteitem } =
    useContext(ListTimeSlotContext);
  const [account, setAccount] = useState([]);
  const [sum, setSum] = useState(0);
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

  const addorder = async (e) => {
    e.preventDefault();
    const idaccount = id;
    const total = sum;
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
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (swal) => {
            swal.addEventListener("mouseenter", Swal.stopTimer);
            swal.addEventListener("mouseleave", Swal.resumeTimer);
          },
        }).then(() => {
          navigator("/");
        });
      });
  };
  return (
    <div>
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
                                    <td>{item.pricetime} VNĐ</td>
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
                                      <strong>{sum} VNĐ</strong>
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
                  <Link
                    to={"/"}
                    className="btn btn-success btn-lg btn-radius m-1"
                    onClick={addorder}
                  >
                    Đặt phòng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
