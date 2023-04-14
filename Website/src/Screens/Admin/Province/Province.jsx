import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import Pagination from "../../../components/Pagination/Pagination";
import axios from "axios";

const Province = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerProvince] = useState(4);
  const [province, setProvince] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/province`
    )
    .then((res) => {
      setProvince(res.data);
    });

    const delProvince = async (id) => {
      const edit = await axios
        .delete(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/province/${id}`
        )
        .then(() => {
          navigate("/province");
        });
    };

  // Get current posts
  const indexOfLastProvince = currentPage * postsPerProvince;
  const indexOfFirstProvince = indexOfLastProvince - postsPerProvince;
  const currentProvince = province.slice(
    indexOfFirstProvince,
    indexOfLastProvince
  );

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
                              <div className="col-md-3">
                                <div className="form-group row">
                                  <div className="col-sm-12">
                                    <Link
                                      to={"/newprovince"}
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
                            <th>ID</th>
                            <th>Tên thành phồ</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentProvince.map((province) => (
                            <tr>
                              <td>{province._id}</td>
                              <td>{province.provincename}</td>
                              <td>
                                <Link
                                  to={`/detailprovince/${province._id}`}
                                  className="btn btn-outline-success btn-fw m-1"
                                >
                                  Chi tiết
                                </Link>
                                <Link className="btn btn-outline-danger btn-fw m-1" onClick={() =>{
                                  delProvince(province._id)
                                }}>
                                  Xóa
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <Pagination
                        postsPerProvince={postsPerProvince}
                        totalPosts={province.length}
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

export default Province;
