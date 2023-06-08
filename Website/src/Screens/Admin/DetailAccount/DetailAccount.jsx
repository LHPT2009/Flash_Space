import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import "./DetailAccount.css";
import axios from "axios";
import Swal from "sweetalert2";

const DetailAccount = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [staticaccount, setStaticAccount] = useState(0);
  const navigator = useNavigate();
  const loadinforaccount = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account/${id}`
      )
      .then((res) => {
        setInfo(res.data);
        setStaticAccount(res.data.static);
      });
  };

  useEffect(() => {
    loadinforaccount();
  }, [id]);

  const updatestatic = () => {
    const update = axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/account/notimage/${id}`,
        {
          static: staticaccount,
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Đã cập nhật trạng thái hoạt động!",
          showConfirmButton: true,
        }).then(() => {
          navigator(`/detailaccount/${id}`);
        });
      });
  };
  return (
    <>
      <TopNav />
      <div className="bodyinfouser">
        <div class="container">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar">
                        <img
                          src={`http://localhost:8000/singleimage/${info.avatar}`}
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 class="user-name">
                        {info.firstname} {info.lastname}
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
                          value={`${info.firstname} ${info.lastname}`}
                          disabled
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
                          value={info.email}
                          disabled
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
                          value={info.phonenumber}
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="website">Giới tính</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={info.sex}
                          disabled
                        >
                          <option selected>Chọn cách sắp xếp</option>
                          <option value="0">Nam</option>
                          <option value="1">Nữ</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="website">Ngày sinh</label>
                        <input
                          type="url"
                          class="form-control"
                          id="website"
                          value={info.birthday}
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="website">Giới tính</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={staticaccount}
                          onChange={(e) => setStaticAccount(e.target.value)}
                        >
                          <option value="0">Dừng hoạt động</option>
                          <option value="1">Đang hoạt động</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="text-right">
                        <Link
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary m-1"
                          to={"/accountadmin"}
                        >
                          Trở lại
                        </Link>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-primary m-1"
                          onClick={updatestatic}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailAccount;
