import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const NewPermission = () => {
  const [rolename, setRoleName] = useState("");
  const navigate = useNavigate();
  const newRole = async (e) => {
    e.preventDefault();
    const edit = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/role`,
        {
          rolename,
        }
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Đã thêm quyền thành công!",
          showConfirmButton: true,
        }).then(() => {
          navigate("/role");
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
                    <h4 className="card-title">Thêm mới quyền</h4>
                    <form className="forms-sample" onSubmit={newRole}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên quyền</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Nhập tên quyền"
                          onChange={(e) => setRoleName(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={newRole}
                      >
                        Thêm
                      </button>
                      <button className="btn btn-light">Trở lại</button>
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
