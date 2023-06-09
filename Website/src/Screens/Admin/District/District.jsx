import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import Pagination from "../../../components/Pagination/Pagination";
import axios from "axios";
import Swal from "sweetalert2";

const District = () => {
  const [district, setDistrict] = useState([]);
  const navigate = useNavigate();
  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/district`
    )
    .then((res) => {
      setDistrict(res.data);
    });

  const delDistrict = async (id) => {
    const edit = await axios
      .delete(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/district/${id}`
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Xóa thành công!",
          showConfirmButton: true,
        }).then(() => {
          navigate("/district");
        });
      });
  };

  const sortdistrict = district.reverse();

  const [currentPage, setCurrentPage] = useState(1);
  const [districtsPerPage] = useState(4);

  // Get current districts
  const indexOfLastdistrict = currentPage * districtsPerPage;
  const indexOfFirstdistrict = indexOfLastdistrict - districtsPerPage;
  const currentdistricts = sortdistrict.slice(
    indexOfFirstdistrict,
    indexOfLastdistrict
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
                                      to={"/newdistrict"}
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
                            <th>Thành phố</th>
                            <th>Quận/Huyện</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentdistricts.map((district) => (
                            <tr>
                              <td>{district._id}</td>
                              <td>{district.idprovince.provincename}</td>
                              <td>{district.districtname}</td>
                              <td>
                                <Link
                                  to={`/detaildistrict/${district._id}`}
                                  className="btn btn-outline-success btn-fw m-1"
                                >
                                  Chi tiết
                                </Link>
                                <Link
                                  className="btn btn-outline-danger btn-fw m-1"
                                  onClick={() => {
                                    delDistrict(district._id);
                                  }}
                                >
                                  Xóa
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <Pagination
                        postsPerPage={districtsPerPage}
                        totalPosts={sortdistrict.length}
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

export default District;
