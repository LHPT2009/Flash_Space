import "./InfoUser.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import "./InfoUser.css";
const InfoUser = () => {
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
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 class="user-name">Lê Huỳnh Phương Tùng</h5>
                      <h6 class="user-email">tung@gmail.com</h6>
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
                          value={"Lê Huỳnh Phương Tùng"}
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
                          value={"tung@gmail.com"}
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
                          value={"123456789"}
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
                          placeholder="Nam"
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
                          placeholder="20/09/2001"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="website">Địa chỉ</label>
                        <input
                          type="url"
                          class="form-control"
                          id="website"
                          placeholder="181/7 Liên tỉnh 5 P5 Q8"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="website">Thành phố</label>
                        <input
                          type="url"
                          class="form-control"
                          id="website"
                          placeholder="TP.HCM"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="text-right">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary m-1"
                        >
                          Trở lại
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-primary m-1"
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

export default InfoUser;
