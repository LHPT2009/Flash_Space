import "./InfoUser.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import "./InfoUser.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jwtdecode from "jwt-decode";

const InfoUser = () => {
  const id = jwtdecode(localStorage.getItem("token")).id;
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [avatar, setAvatar] = useState();
  const [birthday, setBirThday] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [sex, setSex] = useState();
  const [staticimage, setStaticImage] = useState(0);
  const [info, setInfo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account/${id}`
      )
      .then((res) => {
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setBirThday(res.data.birthday);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phonenumber);
        setSex(res.data.sex);
        // setAvatar(res.data.avatar);
        setInfo(res.data);
      });
  }, []);

  const editInfo = async (e) => {
    e.preventDefault();
    if(staticimage == 1){
      const add = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account/${id}`,
        {
          firstname,
          lastname,
          avatar,
          birthday,
          email,
          phonenumber,
          sex,
        },
        { headers: { "content-type": "multipart/form-data" } }
      )
      .then((res) => {
        alert("da cap nhat!")
        navigate("/infouser");
      })
      .catch((res) => {
        alert(res);
      });
    }
    if(staticimage == 0){
      const add = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account/notimage/${id}`,
        {
          firstname,
          lastname,
          // avatar,
          birthday,
          email,
          phonenumber,
          sex,
        },
      )
      .then((res) => {
        alert("da cap nhat!")
        navigate("/infouser");
      })
      .catch((res) => {
        alert(res);
      });
    }
  };

  return (
    <>
      <TopNav />
      <div className="bodyinfouser">
        <div class="container">
          <form onSubmit={editInfo}>
            <div class="row gutters">
              <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="account-settings">
                      <div class="user-profile">
                        <div class="user-avatar">
                          {staticimage == 0 ? (
                            <img
                              src={`http://localhost:8000/singleimage/${info.avatar}`}
                              alt="co roi"
                            />
                          ) : (
                            <img
                              src={URL.createObjectURL(avatar)}
                              alt="chua co"
                            />
                          )}
                        </div>
                        <div>
                          <label for="file" className="btn btn-primary">
                            Chọn ảnh cập nhật
                          </label>
                          <input
                            id="file"
                            style={{ visibility: "hidden" }}
                            type="file"
                            onChange={(e) => {
                              setStaticImage(1);
                              setAvatar(e.target.files[0]);
                            }}
                          />
                        </div>
                        <h5 class="user-name">
                          {info.firstname + " " + info.lastname}
                        </h5>
                        <h6 class="user-email">{info.email}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">
                          Thông tin chi tiết người dùng
                        </h6>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="fullName">Họ và tên</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fullName"
                            placeholder="Enter full name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="fullName">Họ và tên</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fullName"
                            placeholder="Enter full name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="eMail">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="eMail"
                            placeholder="Enter email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="phone">Số điện thoại</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            value={phonenumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="website">Giới tính</label>
                          <input
                            type="url"
                            class="form-control"
                            id="website"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group">
                          <label for="website">Ngày sinh</label>
                          <input
                            type="url"
                            class="form-control"
                            id="website"
                            value={birthday}
                            onChange={(e) => setBirThday(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">
                          <Link to={"/"} class="btn btn-secondary m-1">
                            Trở lại
                          </Link>
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            class="btn btn-primary m-1"
                            onClick={editInfo}
                          >
                            Cập nhật
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoUser;
