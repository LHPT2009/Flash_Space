import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailPermission = () => {
  const { id } = useParams();
  const [idservicepack, setIdServicePack] = useState("");
  const [nameservicepack, setNameServicePack] = useState("");
  const [nameaccount, setNameAccount] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [staticsp, setStatic] = useState(0);
  const navigator = useNavigate();
  const loaditem = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/servicepackinuse/${id}`
      )
      .then((res) => {
        setIdServicePack(res.data.idservicepack._id);
        setNameServicePack(res.data.idservicepack.name);
        setNameAccount(
          `${res.data.idaccount.firstname} ${res.data.idaccount.lastname}`
        );
        setStarttime(res.data.starttime);
        setEndtime(res.data.endtime);
        setStatic(res.data.static);
      });
  };

  useEffect(() => {
    loaditem();
  }, []);
  const formatdate = (date) => {
    const getdate = new Date(date);
    const day =
      getdate.getDate() < 10 ? `0${getdate.getDate()}` : getdate.getDate();
    const month =
      getdate.getMonth() < 10
        ? `0${getdate.getMonth() + 1}`
        : getdate.getMonth() + 1;
    const year = getdate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const updatestatic = async () => {
    const load = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/servicepackinuse/${id}`,
        {
          static: staticsp,
        }
      )
      .then((res) => {
        navigator("/servicepackinuse");
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
                    <h4 className="card-title">Chi tiết gói được sử dụng</h4>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Mã gói</label>
                        <input
                          type="text"
                          className="form-control"
                          value={idservicepack}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên gói</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nameservicepack}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Người sử dụng</label>
                        <input
                          type="text"
                          className="form-control"
                          value={nameaccount}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Ngày bắt đầu</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formatdate(starttime)}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Ngày kết thúc</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formatdate(endtime)}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">
                          Trạng thái
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={staticsp}
                          onChange={(e) => setStatic(e.target.value)}
                        >
                          <option value="0">Tạm ngừng sử dụng</option>
                          <option value="1">Đang sử dụng</option>
                        </select>
                      </div>
                      <Link
                        className="btn btn-primary me-2"
                        onClick={updatestatic}
                      >
                        Submit
                      </Link>
                      <Link className="btn btn-light" to={"/servicepackinuse"}>
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

export default DetailPermission;
