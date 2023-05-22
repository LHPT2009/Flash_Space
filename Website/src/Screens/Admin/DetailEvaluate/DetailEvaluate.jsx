import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPermission = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [idroom, setIdroom] = useState("");
  const [subject, setSubject] = useState("");
  const [nameaccount, setNameAccount] = useState("");
  const [point, setPoint] = useState("");
  const [content, setContent] = useState("");
  const [staticevaluate, setStatic] = useState(0);

  const loadevaluate = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/evaluate/idevaluate/${id}`
      )
      .then((res) => {
        setIdroom(res.data.idroom._id);
        setSubject(res.data.idroom.subject);
        setNameAccount(
          `${res.data.idaccount.firstname} ${res.data.idaccount.lastname}`
        );
        setPoint(res.data.point);
        setContent(res.data.content);
        setStatic(res.data.static);
      });
  };

  useEffect(() => {
    loadevaluate();
  }, []);

  const updatestatic = async () => {
    const load = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/evaluate/static/${id}`,
        {
          static: staticevaluate,
        }
      )
      .then((res) => {
        alert("đã cập nhật!");
        navigator("/evaluate");
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
                    <h4 className="card-title">Chi tiết đánh giá</h4>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Mã phòng</label>
                        <input
                          type="text"
                          className="form-control"
                          value={idroom}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Tên phòng</label>
                        <input
                          type="text"
                          className="form-control"
                          value={subject}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">
                          Tên người đánh giá
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={nameaccount}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">
                          Điểm đánh giá
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={point}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">
                          Nội Dung
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea1"
                          rows="4"
                          value={content}
                          disabled
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">
                          Trạng thái
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={staticevaluate}
                          onChange={(e) => setStatic(e.target.value)}
                        >
                          <option value="0">Không Hiển thị</option>
                          <option value="1">Hiển thị</option>
                        </select>
                      </div>
                      <Link
                        type="submit"
                        className="btn btn-primary me-2"
                        onClick={updatestatic}
                      >
                        Cập nhật
                      </Link>
                      <Link className="btn btn-light" to={"/evaluate"}>
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
