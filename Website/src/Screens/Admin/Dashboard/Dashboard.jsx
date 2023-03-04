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
              <div className="row">
                <div className="col-sm-6 mb-4 mb-xl-0">
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <h3 className="text-dark font-weight-bold mb-2">
                        Hi, welcome back!
                      </h3>
                      <h6 className="font-weight-normal mb-2">
                        Last login was 23 hours ago. View details
                      </h6>
                    </div>
                    <div className="ms-lg-5 d-lg-flex d-none">
                      <button type="button" className="btn bg-white btn-icon">
                        <i className="mdi mdi-view-grid text-success"></i>
                      </button>
                      <button
                        type="button"
                        className="btn bg-white btn-icon ms-2"
                      >
                        <i className="mdi mdi-format-list-bulleted font-weight-bold text-primary"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center justify-content-md-end">
                    <div className="pe-1 mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-outline-inverse-info btn-icon-text"
                      >
                        Feedback
                        <i className="mdi mdi-message-outline btn-icon-append"></i>
                      </button>
                    </div>
                    <div className="pe-1 mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-outline-inverse-info btn-icon-text"
                      >
                        Help
                        <i className="mdi mdi-help-circle-outline btn-icon-append"></i>
                      </button>
                    </div>
                    <div className="pe-1 mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-outline-inverse-info btn-icon-text"
                      >
                        Print
                        <i className="mdi mdi-printer btn-icon-append"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-8 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-4">
                          <h4 className="card-title">Sales Difference</h4>
                          <canvas id="salesDifference"></canvas>
                          <p className="mt-3 mb-4 mb-lg-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <h4 className="card-title">Best Sellers</h4>
                          <div className="row">
                            <div className="col-sm-4">
                              <ul className="graphl-legend-rectangle">
                                <li>
                                  <span className="bg-danger"></span>Automotive
                                </li>
                                <li>
                                  <span className="bg-warning"></span>Books
                                </li>
                                <li>
                                  <span className="bg-info"></span>Software
                                </li>
                                <li>
                                  <span className="bg-success"></span>Video
                                  games
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-8 grid-margin">
                              <canvas id="bestSellers"></canvas>
                            </div>
                          </div>
                          <p className="mt-3 mb-4 mb-lg-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <h4 className="card-title">
                            Social Media Statistics
                          </h4>
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
                                  <span className="bg-danger"></span>Instagram
                                  (15%)
                                </li>
                                <li>
                                  <span className="bg-warning"></span>Facebook
                                  (20%)
                                </li>
                                <li>
                                  <span className="bg-info"></span>Website (25%)
                                </li>
                                <li>
                                  <span className="bg-success"></span>Youtube
                                  (40%)
                                </li>
                              </ul>
                            </div>
                          </div>
                          <p className="mb-0 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
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
                        Congratulations Johnson
                      </h2>
                      <p>
                        You have done 57.6% more sales today. Check your new
                        badge in your profile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 flex-column d-flex stretch-card">
                  <div className="row">
                    <div className="col-lg-4 d-flex grid-margin stretch-card">
                      <div className="card bg-primary">
                        <div className="card-body text-white">
                          <h3 className="font-weight-bold mb-3">
                            18,39 (75GB)
                          </h3>
                          <div className="progress mb-3">
                            <div
                              className="progress-bar  bg-warning"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <p className="pb-0 mb-0">Bandwidth usage</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex grid-margin stretch-card">
                      <div className="card sale-diffrence-border">
                        <div className="card-body">
                          <h2 className="text-dark mb-2 font-weight-bold">
                            $6475
                          </h2>
                          <h4 className="card-title mb-2">Sales Difference</h4>
                          <small className="text-muted">APRIL 2019</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex grid-margin stretch-card">
                      <div className="card sale-visit-statistics-border">
                        <div className="card-body">
                          <h2 className="text-dark mb-2 font-weight-bold">
                            $3479
                          </h2>
                          <h4 className="card-title mb-2">Visit Statistics</h4>
                          <small className="text-muted">APRIL 2019</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 grid-margin d-flex stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <h4 className="card-title mb-2">
                              Sales Difference
                            </h4>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="text-success btn btn-link  px-1"
                              >
                                <i className="mdi mdi-refresh"></i>
                              </a>
                              <a
                                href="#"
                                className="text-success btn btn-link px-1 dropdown-toggle dropdown-arrow-none"
                                data-bs-toggle="dropdown"
                                id="settingsDropdownsales"
                              >
                                <i className="mdi mdi-dots-horizontal"></i>
                              </a>
                              <div
                                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                                aria-labelledby="settingsDropdownsales"
                              >
                                <a className="dropdown-item">
                                  <i className="mdi mdi-grease-pencil text-primary"></i>
                                  Edit
                                </a>
                                <a className="dropdown-item">
                                  <i className="mdi mdi-delete text-primary"></i>
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            <ul
                              className="nav nav-tabs tab-no-active-fill"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active ps-2 pe-2"
                                  id="revenue-for-last-month-tab"
                                  data-bs-toggle="tab"
                                  href="#revenue-for-last-month"
                                  role="tab"
                                  aria-controls="revenue-for-last-month"
                                  aria-selected="true"
                                >
                                  Revenue for last month
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link ps-2 pe-2"
                                  id="server-loading-tab"
                                  data-bs-toggle="tab"
                                  href="#server-loading"
                                  role="tab"
                                  aria-controls="server-loading"
                                  aria-selected="false"
                                >
                                  Server loading
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link ps-2 pe-2"
                                  id="data-managed-tab"
                                  data-bs-toggle="tab"
                                  href="#data-managed"
                                  role="tab"
                                  aria-controls="data-managed"
                                  aria-selected="false"
                                >
                                  Data managed
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link ps-2 pe-2"
                                  id="sales-by-traffic-tab"
                                  data-bs-toggle="tab"
                                  href="#sales-by-traffic"
                                  role="tab"
                                  aria-controls="sales-by-traffic"
                                  aria-selected="false"
                                >
                                  Sales by traffic
                                </a>
                              </li>
                            </ul>
                            <div className="tab-content tab-no-active-fill-tab-content">
                              <div
                                className="tab-pane fade show active"
                                id="revenue-for-last-month"
                                role="tabpanel"
                                aria-labelledby="revenue-for-last-month-tab"
                              >
                                <div className="d-lg-flex justify-content-between">
                                  <p className="mb-4">+5.2% vs last 7 days</p>
                                  <div
                                    id="revenuechart-legend"
                                    className="revenuechart-legend"
                                  >
                                    f
                                  </div>
                                </div>
                                <canvas id="revenue-for-last-month-chart"></canvas>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="server-loading"
                                role="tabpanel"
                                aria-labelledby="server-loading-tab"
                              >
                                <div className="d-flex justify-content-between">
                                  <p className="mb-4">+5.2% vs last 7 days</p>
                                  <div
                                    id="serveLoading-legend"
                                    className="revenuechart-legend"
                                  >
                                    f
                                  </div>
                                </div>
                                <canvas id="serveLoading"></canvas>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="data-managed"
                                role="tabpanel"
                                aria-labelledby="data-managed-tab"
                              >
                                <div className="d-flex justify-content-between">
                                  <p className="mb-4">+5.2% vs last 7 days</p>
                                  <div
                                    id="dataManaged-legend"
                                    className="revenuechart-legend"
                                  >
                                    f
                                  </div>
                                </div>
                                <canvas id="dataManaged"></canvas>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="sales-by-traffic"
                                role="tabpanel"
                                aria-labelledby="sales-by-traffic-tab"
                              >
                                <div className="d-flex justify-content-between">
                                  <p className="mb-4">+5.2% vs last 7 days</p>
                                  <div
                                    id="salesTrafic-legend"
                                    className="revenuechart-legend"
                                  >
                                    f
                                  </div>
                                </div>
                                <canvas id="salesTrafic"></canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 flex-column d-flex stretch-card">
                  <div className="row flex-grow">
                    <div className="col-sm-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-8">
                              <h3 className="font-weight-bold text-dark">
                                Canada,Ontario
                              </h3>
                              <p className="text-dark">Monday 3.00 PM</p>
                              <div className="d-lg-flex align-items-baseline mb-3">
                                <h1 className="text-dark font-weight-bold">
                                  23
                                  <sup className="font-weight-light">
                                    <small>o</small>
                                    <small className="font-weight-medium">
                                      c
                                    </small>
                                  </sup>
                                </h1>
                                <p className="text-muted ms-3">Partly cloudy</p>
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
                                    <p className="mb-0">Your Iincome</p>
                                  </div>
                                  <div className="col-sm-6 climate-info-border mt-lg-0 mt-2">
                                    <h2>$2650</h2>
                                    <p className="mb-0">Your Spending</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row pt-3 mt-md-1">
                            <div className="col">
                              <div className="d-flex purchase-detail-legend align-items-center">
                                <div id="circleProgress1" className="p-2"></div>
                                <div>
                                  <p className="font-weight-medium text-dark text-small">
                                    Sessions
                                  </p>
                                  <h3 className="font-weight-bold text-dark  mb-0">
                                    26.80%
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="d-flex purchase-detail-legend align-items-center">
                                <div id="circleProgress2" className="p-2"></div>
                                <div>
                                  <p className="font-weight-medium text-dark text-small">
                                    Users
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
                    <div className="col-sm-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="d-flex align-items-center justify-content-between">
                                <h4 className="card-title mb-0">
                                  Visits Today
                                </h4>
                                <div className="dropdown">
                                  <a
                                    href="#"
                                    className="text-success btn btn-link  px-1"
                                  >
                                    <i className="mdi mdi-refresh"></i>
                                  </a>
                                  <a
                                    href="#"
                                    className="text-success btn btn-link px-1 dropdown-toggle dropdown-arrow-none"
                                    data-bs-toggle="dropdown"
                                    id="profileDropdownvisittoday"
                                  >
                                    <i className="mdi mdi-dots-horizontal"></i>
                                  </a>
                                  <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                                    aria-labelledby="profileDropdownvisittoday"
                                  >
                                    <a className="dropdown-item">
                                      <i className="mdi mdi-grease-pencil text-primary"></i>
                                      Edit
                                    </a>
                                    <a className="dropdown-item">
                                      <i className="mdi mdi-delete text-primary"></i>
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <p className="mt-1">Calculated in last 30 days</p>
                              <div className="d-lg-flex align-items-center justify-content-between">
                                <h1 className="font-weight-bold text-dark">
                                  4332
                                </h1>
                                <div className="mb-3">
                                  <button
                                    type="button"
                                    className="btn btn-outline-light text-dark font-weight-normal"
                                  >
                                    Day
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-outline-light text-dark font-weight-normal"
                                  >
                                    Month
                                  </button>
                                </div>
                              </div>
                              <canvas id="visitorsToday"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
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
                    <div className="line-chart-row-title">MY NEW CLIENTS</div>
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
                    <div className="line-chart-row-title">All Products</div>
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
                    <div className="line-chart-row-title">NEW INVOICES</div>
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
                    <div className="line-chart-row-title">All PROJECTS</div>
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
                    <div className="line-chart-row-title">Orders Received</div>
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
                    <div className="line-chart-row-title">TRANSACTIONS</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h4 className="card-title">Support Tracker</h4>
                        <h4 className="text-success font-weight-bold">
                          Tickets<span className="text-dark ms-3">163</span>
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
                <div className="col-sm-6 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-lg-flex align-items-center justify-content-between mb-4">
                        <h4 className="card-title">Product Orders</h4>
                        <p className="text-dark">+5.2% vs last 7 days</p>
                      </div>
                      <div className="product-order-wrap padding-reduced">
                        <div
                          id="productorder-gage"
                          className="gauge productorder-gage"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
