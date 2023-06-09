import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import Pagination from "../../../components/Pagination/Pagination";
import axios from "axios";

const BookingSchedule = () => {
  const [bookingroom, setBookingRoom] = useState([]);
  const navigate = useNavigate();

  const loadbookingroom = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/bookingroom`
      )
      .then((res) => {
        setBookingRoom(res.data);
      });
  };

  useEffect(() => {
    loadbookingroom();
  }, []);

  const formatdate = (date) => {
    const getdate = new Date(date);
    const day =
      getdate.getDate() < 10 ? `0${getdate.getDate()}` : getdate.getDate();
    const month =
      getdate.getMonth() < 10
        ? `0${getdate.getMonth() + 1}`
        : getdate.getMonth() + 1;
    const year = getdate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const sortbookingroom = bookingroom.reverse();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortbookingroom.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className=" page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className=" grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Bảng danh sách tài khoản</h4>
                    <div className="col-12 grid-margin">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Tùy chọn tìm kiếm</h4>
                          <form className="form-sample">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="form-group row">
                                  <div className="col-sm-12">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Tìm kiếm theo tên"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group row">
                                  <div className="col-sm-12">
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Chọn cách sắp xếp
                                      </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="col-md-3">
                                <div className="form-group row">
                                  <div className="col-sm-12">
                                    <Link
                                      to={"/detailaccount"}
                                      className="btn btn-outline-primary btn-fw mb-4"
                                    >
                                      Thêm mới
                                    </Link>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title">Bảng danh sách</h5>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Mã đơn</th>
                            <th>Họ tên người đặt</th>
                            <th>Tổng tiền</th>
                            <th>Ngày đặt</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPosts.map((item) => (
                            <tr>
                              <td>{item._id.slice(0, 10)}...</td>
                              <td>
                                {item.idaccount.firstname}{" "}
                                {item.idaccount.lastname}
                              </td>
                              <td>{item.total}</td>
                              <td>{formatdate(item.date)}</td>
                              {item.static == 0 ? (
                                <td>
                                  <button
                                    className="btn btn-warning btn-fw m-1"
                                    disabled
                                  >
                                    Đã gửi
                                  </button>
                                </td>
                              ) : (
                                ""
                              )}
                              {item.static == 1 ? (
                                <td>
                                  <button
                                    className="btn btn-success btn-fw m-1"
                                    disabled
                                  >
                                    Đặt thành công
                                  </button>
                                </td>
                              ) : (
                                ""
                              )}
                              {item.static == 2 ? (
                                <td>
                                  <button
                                    className="btn btn-danger btn-fw m-1"
                                    disabled
                                  >
                                    Hủy đơn đặt
                                  </button>
                                </td>
                              ) : (
                                ""
                              )}
                              <td>
                                <Link
                                  to={`/detailbookingroom/${item._id}`}
                                  className="btn btn-outline-success btn-fw m-1"
                                >
                                  Chi tiết
                                </Link>
                                {/* <Link className="btn btn-outline-danger btn-fw m-1">
                                  Xóa
                                </Link> */}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={sortbookingroom.length}
                        paginate={paginate}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingSchedule;
