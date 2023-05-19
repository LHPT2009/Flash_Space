import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./DetailRoom.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import Rating from "../../../components/Rating/Rating";
import Button from "./Button";
import { ListTimeSlotContext } from "../../../context/ListTimeSlotContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
const DetailRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [careername, setCareername] = useState();
  const [subject, setSubject] = useState();
  const [price, setPrice] = useState();
  const [describe, setDescribe] = useState();
  const [housenumberstreetname, setHousenumberstreetname] = useState();
  const [wardname, setWardname] = useState();
  const [districtname, setDistrictname] = useState();
  const [provincename, setProvincename] = useState();
  const [quantity, setQuantity] = useState();
  const [DateOrder, setDateOrder] = useState();
  const [listWorkingHours, setListWorkingHours] = useState([]);
  const [showImageRoom, setShowImageRoom] = useState();
  const [listImageRoom, setListImageRoom] = useState([]);
  const { timeslots, deleteListTimeSlot } = useContext(ListTimeSlotContext);
  useEffect(() => {
    deleteListTimeSlot();
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/image/byroom/${id}`
      )
      .then((res) => {
        setListImageRoom(res.data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/room/${id}`
      )
      .then((res) => {
        setCareername(res.data.idcareer.careername);
        setSubject(res.data.subject);
        setPrice(res.data.price);
        setDescribe(res.data.describe);
        setHousenumberstreetname(res.data.housenumberstreetname);
        setWardname(res.data.idward.wardname);
        setDistrictname(res.data.iddistrict.districtname);
        setProvincename(res.data.idprovince.provincename);
        setQuantity(res.data.quantity);
        setShowImageRoom(res.data.mainimage);
      });
  }, [id]);

  const searchWorkingHours = (date) => {
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
    const convertdate = year + "-" + month + "-" + day;

    const listTimeSlot = axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/workinghours/${id}`,
        {
          date: convertdate,
        }
      )
      .then((res) => {
        setListWorkingHours(res.data);
      });
  };

  const addFavoriteRoom = async () => {
    if (localStorage.getItem("token")) {
      const add = await axios
        .post(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/favoriteroom`,
          {
            idaccount: jwtDecode(localStorage.getItem("token")).id,
            idroom: id,
          }
        )
        .then((ele) => {
          alert("đã thêm vào yêu thích!");
        })
        .catch((ele) => alert("Đã thêm yêu thích vào từ trước đó!"));
    } else {
      alert("Bạn chưa đăng nhập!");
      navigate("/login");
    }
  };
  return (
    <>
      <TopNav />
      <div className="bodydr">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="estate">
                    <div class="container bootstrap snippets bootdey">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="row">
                            <div class="col-md-7">
                              <div class="product-gallery">
                                <div class="thumbnail-images">
                                  <a
                                    href="#"
                                    class="theater"
                                    rel="group"
                                    hidefocus="true"
                                  >
                                    <img
                                      src={`http://localhost:8000/singleimage/${showImageRoom}`}
                                      class="img-responsive"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div class="thumbnail-images">
                                  {listImageRoom.map((item) => (
                                    <a
                                      href="#"
                                      class="theater"
                                      rel="group"
                                      hidefocus="true"
                                      onClick={(e) =>
                                        setShowImageRoom(item.filename)
                                      }
                                    >
                                      <img
                                        src={`http://localhost:8000/singleimage/${item.filename}`}
                                        alt=""
                                      />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div class="col-md-5 d-flex flex-column">
                              <header></header>
                              <div class="flex-grow-1">
                                <div class="product-info">
                                  <div class="wp-block property list no-border">
                                    <div class="wp-block-content clearfix">
                                      <div class="col-sm-12 d-flex flex-column text-black">
                                        <div
                                          class="card-body"
                                          style={{ padding: "15px" }}
                                        >
                                          <small>{careername}</small>
                                          <h4 class="card-title">
                                            {subject}
                                            <a
                                              href="#"
                                              onClick={addFavoriteRoom}
                                            >
                                              <i
                                                class="fa fa-heart fa-2xl heart-gray"
                                                style={{ marginLeft: "10px" }}
                                              ></i>
                                            </a>
                                          </h4>
                                          <span class="pull-left">
                                            <span class="price">{price}</span>
                                            <span class="period">VNĐ/1h</span>
                                          </span>
                                          <p class="card-text">{describe}</p>
                                          <i class="fa fa-user"></i> {quantity}
                                        </div>
                                        <div
                                          class="footer"
                                          style={{ padding: "15px" }}
                                        >
                                          <small class="text-muted">
                                            {housenumberstreetname +
                                              ", " +
                                              wardname +
                                              ", " +
                                              districtname +
                                              ", " +
                                              provincename}
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <input
                                    type="date"
                                    onChange={(e) => {
                                      if (localStorage.getItem("token")) {
                                        searchWorkingHours(e.target.value);
                                        setDateOrder(e.target.value);
                                      } else {
                                        alert("mời bạn đăng nhập");
                                        navigate("/login");
                                      }
                                    }}
                                    className="form-control"
                                    forma
                                    style={{
                                      width: "100%",
                                      height: "40px",
                                      padding: "10px",
                                      marginBottom: "20px",
                                      fontSize: "20px",
                                      textAlign: "center",
                                    }}
                                  />
                                  {listWorkingHours.map((item) => {
                                    return (
                                      <Button
                                        idroom={id}
                                        idworkinghours={item._id}
                                        roomname={subject}
                                        starttime={item.idtimeslot.starttime}
                                        endtime={item.idtimeslot.endtime}
                                        pricetime={price}
                                        date={DateOrder}
                                      />
                                    );
                                  })}
                                  <span class="clearfix"></span>
                                </div>
                              </div>
                              <footer>
                                {timeslots.length > 0 ? (
                                  <Link
                                    to={"/order"}
                                    class="btn btn-primary btn-lg btn-radius"
                                    style={{
                                      width: "100%",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Đặt lịch
                                  </Link>
                                ) : (
                                  ""
                                )}
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <h3 class="box-title mt-5">THÔNG TIN CHI TIẾT</h3>
                  <div class="table-responsive">
                    <table class="table table-striped table-product">
                      <tbody>
                        <tr>
                          <td width="390">Tên</td>
                          <td>Số lượng</td>
                        </tr>
                        <tr>
                          <td>Máy lạnh</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>Ghế</td>
                          <td>6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Rating idroom={id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailRoom;
