import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import Pagination from "../../../components/Pagination/Pagination";
import axios from "axios";

const BookingSchedule = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("0");

  const loaddata = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/imagescmnd`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const datafil = data
    .filter((item) => item.numbercard !== "")
    .filter(
      (item) =>
        `${item.idaccount.firstname} ${item.idaccount.lastname}`
          .toLowerCase()
          .search(search.toLowerCase().trim()) !== -1
    );
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = datafil.slice(indexOfFirstPost, indexOfLastPost);

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
                    <h4 className="card-title">
                      Bảng danh sách tài khoản yêu cầu xác thực
                    </h4>
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
                                      onChange={(e) =>
                                        setSearch(e.target.value)
                                      }
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
                                      onChange={(e) => setSort(e.target.value)}
                                    >
                                      <option value="0">Chưa xác thực</option>
                                      <option value="1">Đã xác thực</option>
                                      <option value="2">Tất cả</option>
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
                            <th>Mã người dùng</th>
                            <th>Ảnh đại diện</th>
                            <th>Họ tên</th>
                            <th>Trạng thái</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPosts.map((item) => (
                            <tr>
                              <td>{item.idaccount._id}</td>
                              <td className="py-1">
                                <img
                                  src={`http://localhost:8000/singleimage/${item.idaccount.avatar}`}
                                  alt="image"
                                />
                              </td>
                              <td>
                                {item.idaccount.firstname}{" "}
                                {item.idaccount.lastname}
                              </td>
                              {item.static == 1 ? (
                                <td>
                                  <button
                                    className="btn btn-success btn-fw m-1"
                                    disabled
                                  >
                                    Đã xác nhận
                                  </button>
                                </td>
                              ) : (
                                ""
                              )}
                              {item.static == 0 ? (
                                <td>
                                  <button
                                    className="btn btn-warning btn-fw m-1"
                                    disabled
                                  >
                                    Chờ duyệt xác nhận
                                  </button>
                                </td>
                              ) : (
                                ""
                              )}
                              <td>
                                <Link
                                  to={`/detailimagecmnd/${item._id}`}
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
                        totalPosts={datafil.length}
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
