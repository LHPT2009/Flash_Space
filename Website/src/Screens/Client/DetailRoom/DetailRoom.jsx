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
import Swal from "sweetalert2";
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
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [DateOrder, setDateOrder] = useState();
  const [listWorkingHours, setListWorkingHours] = useState([]);
  const [showImageRoom, setShowImageRoom] = useState();
  const [listImageRoom, setListImageRoom] = useState([]);
  const { timeslots, editListTimeSlot, deleteListTimeSlot } =
    useContext(ListTimeSlotContext);
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
        setPrice(
          res.data.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })
        );
        setDescribe(res.data.describe);
        setHousenumberstreetname(res.data.housenumberstreetname);
        setWardname(res.data.idward.wardname);
        setDistrictname(res.data.iddistrict.districtname);
        setProvincename(res.data.idprovince.provincename);
        setQuantity(res.data.quantity);
        setShowImageRoom(res.data.mainimage);
        setDateOrder(formatday(new Date()));
        setWidth(res.data.width);
        setLength(res.data.length);
      });
  }, [id]);

  const formatday = (date) => {
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
    return year + "-" + month + "-" + day;
  };
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
          Swal.fire({
            icon: "success",
            title: "đã thêm vào yêu thích!",
            showConfirmButton: true,
          });
        })
        .catch((ele) =>
          Swal.fire({
            icon: "warning",
            title: "Đã thêm yêu thích vào từ trước đó!",
            showConfirmButton: true,
          })
        );
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
                                    // href="#"
                                    class="theater"
                                    rel="group"
                                    hidefocus="true"
                                  >
                                    <img
                                      src={`http://localhost:8000/singleimage/${showImageRoom}`}
                                      class="img-responsive"
                                      alt=""
                                      style={{ height: "300px" }}
                                    />
                                  </a>
                                </div>
                                <div class="thumbnail-images">
                                  {listImageRoom.map((item) => (
                                    <a
                                      // href="#"
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
                                        style={{ height: "100px" }}
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
                                                class="fa fa-heart heart-red"
                                                style={{ marginLeft: "10px" }}
                                              ></i>
                                            </a>
                                          </h4>
                                          <span class="pull-left">
                                            <span class="price">{price}</span>
                                            <span class="period">/1h</span>
                                          </span>
                                          <p class="card-text">{describe}</p>
                                          <div className="row">
                                            <div className="col-auto">
                                              <i class="fa fa-user"></i>{" "}
                                              {quantity}
                                            </div>
                                            <div className="col-auto">
                                              <i class="fa fa-expand-arrows-alt"></i>{" "}
                                              {length}m X {width}m
                                            </div>
                                          </div>
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
                                    value={DateOrder}
                                    onChange={(e) => {
                                      if (localStorage.getItem("token")) {
                                        searchWorkingHours(e.target.value);
                                        setDateOrder(e.target.value);
                                      } else {
                                        Swal.fire({
                                          icon: "error",
                                          title:
                                            "Bạn vẫn chưa đăng nhập hãy đến trang đăng nhập!",
                                          showConfirmButton: true,
                                        }).then(() => {
                                          navigate("/login");
                                        });
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
                                  <>
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
                                    <div className=" mt-2">
                                      <strong>Danh sách bạn đã chọn:</strong>
                                      <br />
                                      {timeslots.map((item) => (
                                        <button
                                          type="button"
                                          className="btn btn-light btn-radius"
                                          style={{
                                            marginRight: "5px",
                                            marginBottom: "5px",
                                          }}
                                          onClick={() => editListTimeSlot(item)}
                                        >
                                          {`${item.starttime} - ${item.endtime} - (${item.date})`}
                                        </button>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  <button
                                    // to={"/order"}
                                    class="btn btn-primary btn-lg btn-radius"
                                    style={{
                                      width: "100%",
                                      fontSize: "20px",
                                    }}
                                    disabled
                                  >
                                    Bạn chưa đặt thời gian nào
                                  </button>
                                )}
                                <div></div>
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
                          <td>Tên</td>
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
