import { useEffect, useState } from "react";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailServicePack = () => {
  const { id } = useParams();
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [content,setContent] = useState("");
  const [duration,setDuration] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(
      `${
        process.env.REACT_APP_URL
          ? `${process.env.REACT_APP_URL}`
          : `http://localhost:8000`
      }/servicepack/${id}`
    )
    .then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setContent(res.data.content);
      setDuration(res.data.duration);
    });
  },[])
    const editServicePack = async (e) => {
      e.preventDefault();
      const edit = await axios
        .put(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/servicepack/${id}`,
          {
            name,
            price,
            content,
            duration,
          }
        )
        .then(() => {
          navigate("/servicepack");
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
                  <h4 className="card-title">Chi tiết gói</h4>
                  <form className="forms-sample" onSubmit={editServicePack}>
                    <div className="form-group">
                      <label for="exampleInputUsername1">Tên gói</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="điền tên gói"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputUsername1">Giá</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Điền giá"
                        defaultValue={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputConfirmPassword1">
                        Nôi dung của gói
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleTextarea1"
                        rows="4"
                        placeholder="Mời bạn điền nôi dung của gói"
                        defaultValue={content}
                        onChange={(e) => setContent(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputUsername1">Thời hạn</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Điền thời hạn"
                        defaultValue={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary me-2" onClick={editServicePack}>
                      Cập nhật
                    </button>
                    <Link className="btn btn-light" to={"/servicepack"}>Trở lại</Link>
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

export default DetailServicePack;
