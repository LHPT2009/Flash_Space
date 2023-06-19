import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import Pagination from "../../../components/Pagination/Pagination";
import axios from "axios";

const Staff = () => {
  const [listaccount, setListAccount] = useState([]);
  const [search, setSearch] = useState("");

  const loadlistaccount = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account`
      )
      .then((res) => {
        setListAccount(res.data);
      });
  };

  useEffect(() => {
    loadlistaccount();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // Get current posts
  const accountuser = listaccount
    .filter((item) => item.idrole._id !== "642dc5fe3db1f869d982a638")
    .filter(
      (item) =>
        `${item.firstname} ${item.lastname}`
          .toLowerCase()
          .search(search.toLowerCase().trim()) !== -1
    )
    .reverse();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = accountuser.slice(indexOfFirstPost, indexOfLastPost);

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
                      Bảng danh sách quyền hiền có trong hệ thống
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
                              {/* <div className="col-md-2">
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
                              </div> */}
                              <div className="col-md-3">
                                <div className="form-group row">
                                  <div className="col-sm-12">
                                    <Link
                                      to={"/newstaff"}
                                      className="btn btn-outline-primary btn-fw mb-4"
                                    >
                                      Thêm mới
                                    </Link>
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
                            <th>id</th>
                            <th>Ảnh đại diện</th>
                            <th>Họ và tên</th>
                            <th>Phân quyền</th>
                            <th>email</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPosts.map((item) => (
                            <tr>
                              <td>{item._id}</td>
                              <td className="py-1">
                                <img
                                  src={`${
                                    process.env.REACT_APP_URL
                                      ? `${process.env.REACT_APP_URL}`
                                      : `http://localhost:8000`
                                  }/singleimage/${item.avatar}`}
                                  onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = `${
                                      process.env.REACT_APP_URL
                                        ? `${process.env.REACT_APP_URL}`
                                        : `http://localhost:8000`
                                    }/singleimage/error.jpg`;
                                  }}
                                  alt="image"
                                />
                              </td>
                              <td>
                                {item.firstname} {item.lastname}
                              </td>
                              <td>{item.idrole.rolename}</td>
                              <td>{item.email}</td>
                              <td>
                                <Link
                                  to={`/detailaccountstaff/${item._id}`}
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
                        totalPosts={accountuser.length}
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

export default Staff;
