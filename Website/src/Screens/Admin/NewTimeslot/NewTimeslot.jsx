import axios from "axios";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NewTimeSlot = () => {
  const [starttime,setStartTime] = useState("");
  const [endtime,setEndTime] = useState("");
  const navigate = useNavigate();
  const newTimeSlot = async (e) => {
    e.preventDefault();
    const edit = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/timeslot`,
        {
          starttime,
          endtime,
        }
      )
      .then(() => {
        navigate("/timeslot");
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
                    <h4 className="card-title">Thêm mới khung giờ hoạt động</h4>
                    <form className="forms-sample">
                      <div className="form-group" onSubmit={newTimeSlot}>
                        <label for="exampleInputUsername1">Thời gian bắt đầu</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Điền thời gian bắt đầu"
                          onChange={(e) => setStartTime(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Thời gian kết thúc</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Điền thời gian kết thúc"
                          onChange={(e) => setEndTime(e.target.value)}
                        />
                      </div>
                      
                      <button type="submit" className="btn btn-primary me-2" onClick={newTimeSlot}>
                        Thêm mới
                      </button>
                      <Link className="btn btn-light" to={"/timeslot"}>Trở lại</Link>
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

export default NewTimeSlot;
