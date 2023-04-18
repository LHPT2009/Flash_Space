import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPermission = () => {
  const { id } = useParams();
  const [starttime,setStartTime] = useState("");
  const [endtime,setEndTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/timeslot/${id}`
    )
    .then((res) => {
      setStartTime(res.data.starttime);
      setEndTime(res.data.endtime);
    });
  },[])
    const editTimeSlot = async (e) => {
      e.preventDefault();
      const edit = await axios
        .put(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/timeslot/${id}`,
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
                    <h4 className="card-title">Chi tiết khung giờ hoạt động</h4>
                    <form className="forms-sample" onSubmit={editTimeSlot}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Thời gian bắt đầu</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Điền thời gian bắt đầu"
                          defaultValue={starttime}
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
                          defaultValue={endtime}
                          onChange={(e) => setEndTime(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary me-2"
                      onClick={editTimeSlot}>
                        Cập nhật
                      </button>
                      <Link to={"/"} className="btn btn-light">Trở lại</Link>
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
