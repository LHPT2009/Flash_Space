import "./InfoUser.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";

const InfoUser = () => {
  return (
    <div>
      <TopNav />
      <div className="bodyinfouser">
        <div
          class="container px-4 mt-4"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div class="row">
            <div class="col-xl-4">
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Ảnh đại diện của bạn</div>
                <div class="card-body text-center">
                  <img
                    class="img-account-profile rounded-circle mb-2"
                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                  <div class="small font-italic text-muted mb-4">
                    JPG Hoặc PNG không quá 5mb
                  </div>
                  <button class="btn btn-primary" type="button">
                    Cập nhật ảnh đại diện
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="card mb-4">
                <div class="card-header">Chi tiết tài khoản</div>
                <div class="card-body">
                  <form>
                    <div class="mb-3">
                      <label class="small mb-1" for="inputUsername">
                        Tài khoản
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Tài khoản của bạn"
                      />
                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName">
                          Họ và tên lót
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Họ và tên lót của bạn"
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputLastName">
                          Tên
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Tên của bạn"
                        />
                      </div>
                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputOrgName">
                          Giới tính
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Giới tính của bạn"
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputLocation">
                          Địa chỉ
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Địa chỉ của bạn"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="small mb-1" for="inputEmailAddress">
                        Địa chỉ Email
                      </label>
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Địa chỉ Email của bạn"
                      />
                    </div>
                    <div class="row gx-3 mb-3">
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputPhone">
                          Số điện thoại
                        </label>
                        <input
                          class="form-control"
                          type="tel"
                          placeholder="Số điện thoại của bạn"
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="small mb-1" for="inputBirthday">
                          Ngày sinh
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Ngày sinh của bạn"
                        />
                      </div>
                    </div>
                    <button class="btn btn-primary" type="button">
                      Lưu thay đổi
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoUser;
