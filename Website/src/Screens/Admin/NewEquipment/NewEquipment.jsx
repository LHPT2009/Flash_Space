import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { useState } from "react";

const NewPermission = () => {
  const [equipmentname,setEquipmentName] = useState("");
  const navigate = useNavigate();
  const newEquipment = async (e) => {
    e.preventDefault();
    const edit = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/equipment`,
        {
          equipmentname,
        }
      )
      .then(() => {
        navigate("/equipment");
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
                    <h4 className="card-title">Thêm thiết bị mới</h4>
                    <form className="forms-sample"
                    onSubmit={newEquipment}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên thiết bị mới</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Điền tên thiết bị mới"
                          onChange={(e) => setEquipmentName(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary me-2"
                      onClick={newEquipment}
                      >
                        Thêm mới
                      </button>
                      <Link to={"/equipment"} className="btn btn-light">Trở lại</Link>
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
