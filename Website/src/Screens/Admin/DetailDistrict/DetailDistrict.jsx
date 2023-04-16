import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";

const DetailPermission = () => {
  const { id } = useParams();
  const [idprovince, setIdProvince] = useState("");
  const [provincename, setProvinceName] = useState("");
  const [districtname, setDistrictName] = useState("");
  const [districtnamshow, setDistrictNameShow] = useState("");

  const navigate = useNavigate();

  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/district/${id}`
    )
    .then((res) => {
      setProvinceName(res.data.idprovince.provincename);
      setDistrictNameShow(res.data.districtname);
      setIdProvince(res.data.idprovince._id);
    });

  const editDistrict = async (e) => {
    e.preventDefault();
    const edit = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/district/${id}`,
        {
          idprovince,
          districtname,
        }
      )
      .then(() => {
        navigate("/district");
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
                    <h4 className="card-title">Chi tiết Quận/Huyện</h4>
                    <form className="forms-sample" onSubmit={editDistrict}>
                      <div className="form-group">
                        <label for="exampleSelectGender">Thành phố</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Thành phố"
                          defaultValue={provincename}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Quận/Huyện</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Điền Quận/Huyện"
                          defaultValue={districtnamshow}
                          onChange={(e) => setDistrictName(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={editDistrict}
                      >
                        Cập nhật
                      </button>
                      <Link to={"/district"} className="btn btn-light">
                        trở lại
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

export default DetailPermission;
