import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";

const Dashboard = () => {
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className="page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row mt-4">
                <div className="col-lg-8 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-4">
                          <h4 className="card-title">
                            Xu hướng khung giờ được thuê
                          </h4>
                          <canvas id="salesDifference"></canvas>
                          <p className="mt-3 mb-4 mb-lg-0">
                            Những khung giờ được thuê nhiều của hệ thống
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <h4 className="card-title">
                            Xu hướng loại phòng được thuê
                          </h4>
                          <div className="row">
                            <div className="col-sm-4">
                              <ul className="graphl-legend-rectangle">
                                <li>
                                  <span className="bg-danger"></span>phòng họp
                                </li>
                                <li>
                                  <span className="bg-warning"></span>Phòng thu
                                  âm
                                </li>
                                <li>
                                  <span className="bg-info"></span>Phòng tập thể
                                  dục
                                </li>
                                <li>
                                  <span className="bg-success"></span>Phòng học
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-8 grid-margin">
                              <canvas id="bestSellers"></canvas>
                            </div>
                          </div>
                          <p className="mt-3 mb-4 mb-lg-0">
                            Nắm bắt xu hướng và mong muốn của người dùng
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <h4 className="card-title">Nền tảng được kết nối</h4>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="progress progress-lg grouped mb-2">
                                <div
                                  className="progress-bar  bg-danger"
                                  role="progressbar"
                                  style={{ width: "40%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "10%" }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "30%" }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <ul className="graphl-legend-rectangle">
                                <li>
                                  <span className="bg-danger"></span>Website
                                  (15%)
                                </li>
                                <li>
                                  <span className="bg-warning"></span>Android
                                  (20%)
                                </li>
                                <li>
                                  <span className="bg-info"></span>IOS (25%)
                                </li>
                              </ul>
                            </div>
                          </div>
                          <p className="mb-0 mt-2">
                            Các nền tàng kết nối với chương trình chương trình
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                  <div className="card congratulation-bg text-center">
                    <div className="card-body pb-0">
                      <img src="images/dashboard/face29.png" alt="" />
                      <h2 className="mt-3 text-white mb-3 font-weight-bold">
                        Xin chào Tùng!
                      </h2>
                      <p>
                        Chúc bạn sẽ một ngày tốt lành đối và những người bạn yêu
                        thương cũng vậy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="text-success font-weight-bold">18390</h2>
                        <i className="mdi mdi-account-outline mdi-18px text-dark"></i>
                      </div>
                    </div>
                    <canvas id="newClient"></canvas>
                    <div className="line-chart-row-title">Người dùng</div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="text-danger font-weight-bold">839</h2>
                        <i className="mdi mdi-refresh mdi-18px text-dark"></i>
                      </div>
                    </div>
                    <canvas id="allProducts"></canvas>
                    <div className="line-chart-row-title">Phòng được đăng</div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="text-info font-weight-bold">244</h2>
                        <i className="mdi mdi-file-document-outline mdi-18px text-dark"></i>
                      </div>
                    </div>
                    <canvas id="invoices"></canvas>
                    <div className="line-chart-row-title">Đơn đặt phòng</div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="text-warning font-weight-bold">3259</h2>
                        <i className="mdi mdi-folder-outline mdi-18px text-dark"></i>
                      </div>
                    </div>
                    <canvas id="projects"></canvas>
                    <div className="line-chart-row-title">
                      Đề nghị duyệt đăng phòng
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="text-secondary font-weight-bold">586</h2>
                        <i className="mdi mdi-cart-outline mdi-18px text-dark"></i>
                      </div>
                    </div>
                    <canvas id="orderRecieved"></canvas>
                    <div className="line-chart-row-title">Nhân viên</div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="text-dark font-weight-bold">7826</h2>
                        <i className="mdi mdi-cash text-dark mdi-18px"></i>
                      </div>
                    </div>
                    <canvas id="transactions"></canvas>
                    <div className="line-chart-row-title">Số tiền thu được</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h4 className="card-title">
                          Tình trạng hoạt động của phòng
                        </h4>
                        <h4 className="text-success font-weight-bold">
                          Số lượng phòng hiện có là
                          <span className="text-dark ms-3">163</span>
                        </h4>
                      </div>
                      <div
                        id="support-tracker-legend"
                        className="support-tracker-legend"
                      ></div>
                      <canvas id="supportTracker"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3 className="font-weight-bold text-dark">
                            Việt Nam, Hồ Chí Minh
                          </h3>
                          <p className="text-dark">28/03/2023</p>
                          <div className="d-lg-flex align-items-baseline mb-3">
                            <h1 className="text-dark font-weight-bold">
                              23
                              <sup className="font-weight-light">
                                <small>o</small>
                                <small className="font-weight-medium">c</small>
                              </sup>
                            </h1>
                            <p className="text-muted ms-3">trời nhiều mây</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="position-relative">
                            <img
                              src="images/dashboard/live.png"
                              className="w-100"
                              alt=""
                            />
                            <div className="live-info badge badge-success">
                              Live
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 mt-4 mt-lg-0">
                          <div className="bg-primary text-white px-4 py-4 card">
                            <div className="row">
                              <div className="col-sm-6 pl-lg-5">
                                <h2>$1635</h2>
                                <p className="mb-0">Khoảng thu</p>
                              </div>
                              <div className="col-sm-6 climate-info-border mt-lg-0 mt-2">
                                <h2>$2650</h2>
                                <p className="mb-0">Khoảng chi</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-3 mt-md-1">
                        <div className="col">
                          <div className="d-flex purchase-detail-legend align-items-center">
                            <div>
                              <p className="font-weight-medium text-dark text-small">
                                Đang làm việc
                              </p>
                              <h3 className="font-weight-bold text-dark  mb-0">
                                26.80%
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex purchase-detail-legend align-items-center">
                            <div>
                              <p className="font-weight-medium text-dark text-small">
                                tổng số tài khoản
                              </p>
                              <h3 className="font-weight-bold text-dark  mb-0">
                                56.80%
                              </h3>
                            </div>
                          </div>
                        </div>
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

export default Dashboard;
