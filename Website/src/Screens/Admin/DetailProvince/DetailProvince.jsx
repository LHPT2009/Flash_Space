import { useState } from "react";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const DetailProvince = () => {
  const { id } = useParams();
  const [province, setprovince] = useState("");
  const [provincename, setprovincename] = useState("");
  const navigate = useNavigate();

  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/province/${id}`
    )
    .then((res) => {
      setprovince(res.data);
    });

  const editProvince = async (e) => {
    e.preventDefault();
    const edit = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/province/${id}`,
        {
          provincename,
        }
      )
      .then(() => {
        navigate("/province");
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
                    <h4 className="card-title">Chi tiết thành phố</h4>
                    <form className="forms-sample" onSubmit={editProvince}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên thành phố</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setprovincename(e.target.value)}
                          defaultValue={province.provincename}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={editProvince}
                      >
                        Cập nhật
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

export default DetailProvince;
