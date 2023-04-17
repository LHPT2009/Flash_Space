import axios from "axios";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const DetailPermission = () => {
  const {id} = useParams();
  const [career, setcareer] = useState([]);
  const [careername, setCareerName] = useState("");
  const navigate = useNavigate();
  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/career/${id}`
    )
    .then((res) => {
      setcareer(res.data);
    });

    const editCareer = async (e) => {
    e.preventDefault();
    const edit = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/career/${id}`,
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
                    <h4 className="card-title">Chi tiết thể loại phòng</h4>
                    <form className="forms-sample" onSubmit={editCareer}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">tên thể loại phòng</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={career.careername}
                          onChange={(e) => setCareerName(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary me-2" 
                      onClick={editCareer}>
                        Cập nhật
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

export default DetailPermission;
