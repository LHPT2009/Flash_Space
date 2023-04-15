import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";

const DetailPermission = () => {
  const id = useParams();
  const [district, setDistrict] = useState([]);
  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/district/${id}`
    )
    .then((res) => {
      setDistrict(res.data);
      console.log(res.data);
    });
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
                    <form
                      className="forms-sample"
                      // onSubmit={NProvince}
                    >
                      <div className="form-group">
                        <label for="exampleSelectGender">Thành phố</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Thành phố"
                          value={district.idprovince.provincename}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Quận/Huyện</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Điền Quận/Huyện"
                          value={district.districtname}
                          // onChange={(e) => setDisTrictName(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        // onClick={NProvince}
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
