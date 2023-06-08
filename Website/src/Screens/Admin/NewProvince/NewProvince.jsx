import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const NewPermission = () => {
  const [provincename, setProvinceName] = useState("");
  const navigate = useNavigate();
  const newProvince = async (e) => {
    e.preventDefault();
    const edit = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/province`,
        {
          provincename,
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Đã thêm mới thành công!",
          showConfirmButton: true,
        }).then(() => {
          navigate("/province");
        });
      });
  };
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Thêm thông tin thành phố mới</h4>
                    <form className="forms-sample" onSubmit={newProvince}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên thành phố</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setProvinceName(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={newProvince}
                      >
                        Tạo mới
                      </button>
                      <Link to={"/province"} className="btn btn-light">
                        Trở lại
                      </Link>
                    </form>
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

export default NewPermission;
