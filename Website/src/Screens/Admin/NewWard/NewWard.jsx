import { useState } from "react";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewPermission = () => {
  const [listdistrict, setListDistrict] = useState([]);
  const [iddistrict, setIdDistrict] = useState("");
  const [wardname, setWardName] = useState("");
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
      setListDistrict(res.data);
    });

  const NWard = async (e) => {
    e.preventDefault();
    const newWard = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/ward`,
        {
          iddistrict,
          wardname,
        }
      )
      .then(() => {
        navigate("/ward");
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
                    <h4 className="card-title">thêm mới Phường/Xã</h4>
                    <form className="forms-sample" onSubmit={NWard}>
                      <div className="form-group">
                        <label for="exampleSelectGender">Thành phố</label>
                        <select
                          className="form-control"
                          onChange={(e) => setIdDistrict(e.target.value)}
                        >
                          <option value="none">Mời bạn chọn Thành phố</option>
                          {listdistrict.map((item) => (
                            <option value={item._id}>
                              {item.districtname}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="exampleSelectGender">Quận/Huyện</label>
                        <select
                          className="form-control"
                          onChange={(e) => setIdDistrict(e.target.value)}
                        >
                          <option value="none">Mời bạn chọn Quận/Huyện</option>
                          {listdistrict.map((item) => (
                            <option value={item._id}>
                              {item.districtname}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Phường/xã</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Điền Quận/Huyện"
                          onChange={(e) => setWardName(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={NWard}
                      >
                        Thêm mới
                      </button>
                      <Link to={"/ward"} className="btn btn-light">
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

export default NewPermission;
