import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { useState } from "react";

const NewPermission = () => {
  const [listprovince, setListProvince] = useState([]);
  const [idprovince, setIdProvince] = useState("");
  const [districtname, setDisTrictName] = useState("");
  const navigate = useNavigate();
  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/province`
    )
    .then((res) => {
      setListProvince(res.data);
    });

  const NProvince = async (e) => {
    e.preventDefault();
    const newPro = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/district`,
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
                    <h4 className="card-title">thêm mới Quận/Huyện</h4>
                    <form className="forms-sample" onSubmit={NProvince}>
                      <div className="form-group">
                        <label for="exampleSelectGender">Thành phố</label>
                        <select
                          className="form-control"
                          onChange={(e) => setIdProvince(e.target.value)}
                        >
                          <option value="none">Mời bạn chọn</option>
                          {listprovince.map((item) => (
                            <option value={item._id}>
                              {item.provincename}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Quận/Huyện</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Điền Quận/Huyện"
                          onChange={(e) => setDisTrictName(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={NProvince}
                      >
                        Thêm mới
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

export default NewPermission;
