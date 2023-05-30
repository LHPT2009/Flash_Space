import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";

const DetailWard = () => {
  const { id } = useParams();
  const [districtnameshow, setDistrictNameShow] = useState("");
  const [wardnameshow, setWardNameShow] = useState("");
  const [wardname, setWardName] = useState("");
  const [iddistrict, setIdDistrict] = useState("");
  const navigate = useNavigate();
  axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/ward/${id}`
    )
    .then((res) => {
      setDistrictNameShow(res.data.iddistrict.districtname);
      setIdDistrict(res.data.iddistrict._id);
      setWardNameShow(res.data.wardname);
    });

  const editWard = async (e) => {
    e.preventDefault();
    const edit = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/ward/${id}`,
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
                    <h4 className="card-title">Chi tiết Phường/xã</h4>
                    <form className="forms-sample" onSubmit={editWard}>
                      <div className="form-group">
                        <label for="exampleSelectGender">Thành phố</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Quận/huyện"
                          value={"Hồ Chí Minh"}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleSelectGender">Quận/huyện</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Quận/huyện"
                          defaultValue={districtnameshow}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Phường/xã</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Điền Phường/xã"
                          defaultValue={wardnameshow}
                          onChange={(e) => setWardName(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={editWard}
                      >
                        Cập nhật
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

export default DetailWard;
