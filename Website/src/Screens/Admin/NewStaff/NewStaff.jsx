import { useState } from "react";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewPermission = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const newstaff = async (e) => {
    e.preventDefault();
    const edit = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/auth/registeradmin`,
        {
          username,
          firstname,
          lastname,
          email,
        }
      )
      .then(() => {
        navigate("/staff");
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
                    <h4 className="card-title">Thêm nhân viên mới</h4>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên đăng nhập</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Họ</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Tên</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={newstaff}
                      >
                        Thêm
                      </button>
                      <Link className="btn btn-light" to={"/staff"}>
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
