import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import Pagination from "../../../components/Pagination/Pagination";
import axios from "axios";

const Evaluate = () => {
  const [evaluate, setEvaluate] = useState([]);

  const loadevaluate = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/evaluate`
      )
      .then((res) => {
        setEvaluate(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    loadevaluate();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // Get current posts
  const evaluatefilter = evaluate
    .filter((item) => item.content !== "")
    .filter((item) => item.point !== 0)
    .reverse();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = evaluatefilter.slice(indexOfFirstPost, indexOfLastPost);

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
                            <th>Mã phòng</th>
                            <th>tên người dùng</th>
                            <th>Điểm đánh giá</th>
                            <th>Trạng thái</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPosts.map((item) => (
                            <tr>
                              <td>{item.idroom._id}</td>
                              <td>
                                {item.idaccount.firstname}{" "}
                                {item.idaccount.lastname}
                              </td>
                              <td>{item.point}</td>
                              {item.static == 1 ? (
                                <td>
                                  <button
                                    className="btn btn-success btn-fw m-1"
                                    disabled
                                  >
                                    Hiển thị
                                  </button>
                                </td>
                              ) : (
                                ""
                              )}
                              {item.static == 0 ? (
                                <td>
                                  <button
                                    className="btn btn-danger btn-fw m-1"
                                    disabled
                                  >
                                    Không Hiển thị
                                  </button>
                                </td>
                              ) : (
                                ""
                              )}
                              <td>
                                <Link
                                  to={`/detailevaluate/${item._id}`}
                                  className="btn btn-outline-success btn-fw m-1"
                                >
                                  Chi tiết
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={evaluatefilter.length}
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

export default Evaluate;
