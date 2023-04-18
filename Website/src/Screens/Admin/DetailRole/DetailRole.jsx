import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { useState } from "react";
import axios from "axios";

const DetailRole = () => {
  const { id } = useParams();
  const [role, setRole] = useState("");
  const [rolename, setRoleName] = useState("");
  const navigate = useNavigate();

  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/role/${id}`
    )
    .then((res) => {
      setRole(res.data);
    });

    const editRole = async (e) => {
      e.preventDefault();
      const edit = await axios
        .put(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/role/${id}`,
          {
            rolename,
          }
        )
        .then(() => {
          navigate("/role");
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
                    <h4 className="card-title">Thông tin chi tiết quyền</h4>
                    <form className="forms-sample" onSubmit={editRole}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên quyền</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Nhập tên quyền"
                          defaultValue={role.rolename}
                          onChange={(e) => setRoleName(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary me-2" onClick={editRole}>
                        Câp nhật
                      </button>
                      <Link to={"/role"} className="btn btn-light">Trở lại</Link>
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

export default DetailRole;
