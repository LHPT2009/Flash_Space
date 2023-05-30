import axios from "axios";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const DetailPermission = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [idaccount, setIdAccount] = useState("");
  const [frontimage, setFrontImage] = useState("");
  const [backimage, setBackImage] = useState("");
  const [numbercard, setNumberCard] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState(0);
  const [address, setAddress] = useState("");
  const [datecard, setDateCard] = useState("");
  const [staticimage, setStaticImage] = useState(0);
  const [staticindb, setStaticInDb] = useState(0);
  const loaddata = async () => {
    const load = await await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/imagescmnd/${id}`
      )
      .then((res) => {
        setIdAccount(res.data.idaccount._id);
        setFrontImage(res.data.frontimage);
        setBackImage(res.data.backimage);
        setNumberCard(res.data.numbercard);
        setName(res.data.name);
        setBirth(res.data.birth);
        setSex(res.data.sex);
        setAddress(res.data.address);
        setDateCard(res.data.datecard);
        setStaticImage(res.data.staticimage);
        setStaticInDb(res.data.static);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const updatestatic = async (e) => {
    e.preventDefault();
    const edit = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/imagescmnd/static/${id}`,
        {
          static: staticindb,
        }
      )
      .then((res) => {
        alert("da cap nhat!");
        navigate("/imagecmnd");
      })
      .catch((res) => {
        alert(res);
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
                    <h4 className="card-title">Chi tiết thông tin xác thực</h4>
                    <form className="forms-sample" onSubmit={updatestatic}>
                      {staticimage == 0 ? (
                        ""
                      ) : (
                        <div className="form-group">
                          <label for="exampleInputUsername1">
                            Hình ảnh CMND/CCCD
                          </label>
                          <div class="row">
                            <div class="col-sm-6 text-end">
                              <img
                                src={`http://localhost:8000/singleimage/${frontimage}`}
                                class="card-img"
                                alt="..."
                                style={{ height: "300px", width: "500px" }}
                              />
                            </div>
                            <div class="col-sm-6">
                              <img
                                src={`http://localhost:8000/singleimage/${backimage}`}
                                class="card-img"
                                alt="..."
                                style={{ height: "300px", width: "500px" }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="form-group">
                        <label for="exampleInputUsername1">
                          Mã tài khoản đề nghị
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={idaccount}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên chủ thẻ</label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Năm sinh</label>
                        <input
                          type="text"
                          className="form-control"
                          value={birth}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Giới tính</label>
                        <input
                          type="text"
                          className="form-control"
                          value={sex == 0 ? "Nam" : "Nữ"}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">
                          Đỉa chỉ thường trú
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={address}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Ngày cấp thẻ</label>
                        <input
                          type="text"
                          className="form-control"
                          value={datecard}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">
                          Cách thức xác thực
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={
                            staticimage == 0
                              ? "Dữ liệu quét từ QR"
                              : "Dữ liệu nhập tay"
                          }
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">
                          Trạng thái xác thực
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={staticindb}
                          onChange={(e) => setStaticInDb(e.target.value)}
                        >
                          <option value="0">Chờ duyệt xác nhận</option>
                          <option value="1">Đã được duyệt</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={updatestatic}
                      >
                        Cập nhật
                      </button>
                      <Link className="btn btn-light" to={"/imagecmnd"}>
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
