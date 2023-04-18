import { useState } from "react";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewServicePack = () => {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [content,setContent] = useState("");
  const [duration,setDuration] = useState("");
  const navigate = useNavigate();

  const newServicePack = async (e) => {
    e.preventDefault();
    const edit = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/servicepack`,
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
                    <h4 className="card-title">Thêm gói mới</h4>
                    <form className="forms-sample" onSubmit={newServicePack}>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên gói</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="điền tên gói"
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
                          onChange={(e) => setDuration(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary me-2" onClick={newServicePack}>
                        Thêm mới
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

export default NewServicePack;
