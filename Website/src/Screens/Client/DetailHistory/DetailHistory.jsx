import "./DetailHistory.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import ModalComment from "../../../components/Comment/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const DetailHistory = () => {
  const { id } = useParams();
  const [arr, setArr] = useState([]);
  const [inforacc, setInforAcc] = useState([]);
  const [sum, setSum] = useState(0);
  const [idroom, setIdRoom] = useState("");
  const [date, setDate] = useState("");
  const loaddata = async () => {
    const data = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/bookingschedule/${id}`
      )
      .then((res) => {
        setArr(res.data);
        setIdRoom(res.data[0].idworkinghours.idroom._id);
        setDate(res.data[0].idbookingroom.date);
        console.log(res.data[0].idbookingroom.date);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  useEffect(() => {
    let sum = 0;
    arr.forEach((item) => {
      sum = sum + item.idworkinghours.idroom.price;
    });
    setSum(sum);
  }, [arr]);

  const infoAccount = async () => {
    const idaccount = jwtDecode(localStorage.getItem("token")).id;
    const data = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account/${idaccount}`
      )
      .then((res) => {
        setInforAcc(res.data);
      });
  };

  useEffect(() => {
    infoAccount();
  }, []);

  const showformatday = (date) => {
    const datestring = new Date(date);
    const day =
      datestring.getDate() <= 10
        ? `0${datestring.getDate()}`
        : `${datestring.getDate()}`;
    const month =
      datestring.getMonth() + 1 <= 10
        ? `0${datestring.getMonth() + 1}`
        : `${datestring.getMonth() + 1}`;
    const year = datestring.getFullYear();
    return `Ngày ${day} tháng ${month} năm ${year}`;
  };

  return (
    <div>
      <TopNav />
      <div className="bodydth">
        <div class="container">
          <div class="row gutters">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="card">
                <div class="card-body p-0">
                  <div class="invoice-container">
                    <div class="invoice-header">
                      <div class="row gutters">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-start">
                          <a
                            href="index.html"
                            class="btn text-warning"
                            style={{ fontSize: "30px" }}
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
                              {inforacc.firstname} {inforacc.lastname}
                              <br />
                              {inforacc.email}
                              <br />
                              {inforacc.phonenumber}
                            </address>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          <div class="invoice-details">
                            <div class="invoice-num text-black">
                              <div>Hóa đơn được đặt vào ngày:</div>
                              <div>{showformatday(date)}</div>
                              <br />
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
                                </tr>
                              </thead>
                              <tbody>
                                {arr.map((item) => {
                                  const getdate = new Date(
                                    item.idworkinghours.date
                                  );
                                  const day =
                                    getdate.getDate() < 10
                                      ? `0${getdate.getDate()}`
                                      : getdate.getDate();
                                  const month =
                                    getdate.getMonth() + 1 < 10
                                      ? `0${getdate.getMonth() + 1}`
                                      : getdate.getMonth();
                                  const year = getdate.getFullYear();
                                  return (
                                    <tr>
                                      <td>
                                        {item.idworkinghours.idroom.subject}
                                      </td>
                                      <td>
                                        {day}-{month}-{year}
                                      </td>
                                      <td>
                                        {
                                          item.idworkinghours.idtimeslot
                                            .starttime
                                        }
                                      </td>

                                      <td>
                                        {item.idworkinghours.idtimeslot.endtime}
                                      </td>

                                      <td>
                                        {item.idworkinghours.idroom.price} VNĐ
                                      </td>
                                    </tr>
                                  );
                                })}
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
                    <ModalComment
                      idaccount={jwtDecode(localStorage.getItem("token")).id}
                      idbookingroom={id}
                      idroom={idroom}
                    />
                  </div>
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

export default DetailHistory;
