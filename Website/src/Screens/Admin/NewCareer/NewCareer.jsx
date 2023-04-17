import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { useState } from "react";

const NewCareer = () => {
  const [careername,setCareerName] = useState("");
  const navigate = useNavigate();
  const newCareer = async (e) => {
    e.preventDefault();
    const edit = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/career`,
        {
          careername,
        }
      )
      .then(() => {
        navigate("/career");
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
                    <h4 className="card-title">Thêm mới thể loại phòng</h4>
                    <form className="forms-sample" onSubmit={newCareer}>
                      <div className="form-group">
                        <label>Tên loại phòng</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập tên loại phòng"
                          onChange={(e) => setCareerName(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary me-2" onClick={newCareer}>
                        Thêm mới
                      </button>
                      <Link to={"/career"} className="btn btn-light">Trở lại</Link>
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

export default NewCareer;
