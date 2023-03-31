import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <div class="horizontal-menu">
        <nav class="navbar top-navbar col-lg-12 col-12 p-0">
          <div class="container-fluid">
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-between">
              <ul class="navbar-nav navbar-nav-left">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                    id="notificationDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="mdi mdi-bell mx-0"></i>
                    <span class="count bg-success">2</span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown"
                  >
                    <p class="mb-0 font-weight-normal float-left dropdown-header">
                      Thông báo
                    </p>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-success">
                          <i class="mdi mdi-information mx-0"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject font-weight-normal">
                          Application Error
                        </h6>
                        <p class="font-weight-light small-text mb-0 text-muted">
                          Just now
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-warning">
                          <i class="mdi mdi-settings mx-0"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject font-weight-normal">
                          Settings
                        </h6>
                        <p class="font-weight-light small-text mb-0 text-muted">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-info">
                          <i class="mdi mdi-account-box mx-0"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject font-weight-normal">
                          New user registration
                        </h6>
                        <p class="font-weight-light small-text mb-0 text-muted">
                          2 days ago
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                    id="messageDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="mdi mdi-email mx-0"></i>
                    <span class="count bg-primary">4</span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="messageDropdown"
                  >
                    <p class="mb-0 font-weight-normal float-left dropdown-header">
                      Tin nhắn
                    </p>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <img
                          src="images/faces/face4.jpg"
                          alt="image"
                          class="profile-pic"
                        />
                      </div>
                      <div class="preview-item-content flex-grow">
                        <h6 class="preview-subject ellipsis font-weight-normal">
                          David Grey
                        </h6>
                        <p class="font-weight-light small-text text-muted mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <img
                          src="images/faces/face2.jpg"
                          alt="image"
                          class="profile-pic"
                        />
                      </div>
                      <div class="preview-item-content flex-grow">
                        <h6 class="preview-subject ellipsis font-weight-normal">
                          Tim Cook
                        </h6>
                        <p class="font-weight-light small-text text-muted mb-0">
                          New product launch
                        </p>
                      </div>
                    </a>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <img
                          src="images/faces/face3.jpg"
                          alt="image"
                          class="profile-pic"
                        />
                      </div>
                      <div class="preview-item-content flex-grow">
                        <h6 class="preview-subject ellipsis font-weight-normal">
                          {" "}
                          Lê Huỳnh Phương Tùng
                        </h6>
                        <p class="font-weight-light small-text text-muted mb-0">
                          Upcoming board meeting
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <Link to={"/admin"} class="navbar-brand brand-logo">
                  <h1 class="fw-bold m-0" style={{ color: "#FFC107" }}>
                    FLASH SPACE
                  </h1>
                </Link>
                <Link to={"/admin"} class="navbar-brand brand-logo-mini">
                  <h1 class="fw-bold m-0" style={{ color: "#FFC107" }}>
                    FS
                  </h1>
                </Link>
              </div>
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    id="profileDropdown"
                  >
                    <span class="online-status"></span>
                    <img src="images/faces/face28.png" alt="profile" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <Link to={"/admin"} class="dropdown-item">
                      <i class="mdi mdi-settings "></i>
                      Thông tin tài khoản
                    </Link>
                    <Link to={"/"} class="dropdown-item">
                      <i class="mdi mdi-logout "></i>
                      Đăng xuất
                    </Link>
                  </div>
                </li>
              </ul>
              <button
                class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="horizontal-menu-toggle"
              >
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </nav>
        <nav class="bottom-navbar">
          <div class="container">
            <ul class="nav page-navigation">
              <li class="nav-item">
                <Link to={"/admin"} class="nav-link">
                  <i class="mdi mdi-file-document-box menu-icon"></i>
                  <span class="menu-title">Bảng điều khiển</span>
                  <i class="menu-arrow"></i>
                </Link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="mdi mdi-cube-outline menu-icon"></i>
                  <span class="menu-title">Tài khoản</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="submenu">
                  <ul>
                    <li class="nav-item">
                      <Link to={"/accountadmin"} class="nav-link">
                        Tài khoản
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/permission"} class="nav-link">
                        Phân quyền
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li class="nav-item">
                <Link to={"/statistical"} class="nav-link">
                  <i class="mdi mdi-chart-areaspline menu-icon"></i>
                  <span class="menu-title">Thống kê</span>
                  <i class="menu-arrow"></i>
                </Link>
              </li> */}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="mdi mdi-grid menu-icon"></i>
                  <span class="menu-title">Nhân viên</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="submenu">
                  <ul>
                    <li class="nav-item">
                      <Link to={"/staff"} class="nav-link">
                        Nhân viên
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/position"} class="nav-link">
                        Chức vụ nhân viên
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="mdi mdi-emoticon menu-icon"></i>
                  <span class="menu-title">Dịch vụ</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="submenu">
                  <ul>
                    <li class="nav-item">
                      <Link to={"/roomadmin"} class="nav-link">
                        Phòng
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/workassignment"} class="nav-link">
                        Đăng tin
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/servicepack"} class="nav-link">
                        Gói dịch vụ
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li class="nav-item">
                <Link to={"/evaluate"} class="nav-link">
                  <i class="mdi mdi-emoticon menu-icon"></i>
                  <span class="menu-title">Đánh giá</span>
                  <i class="menu-arrow"></i>
                </Link>
              </li> */}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="mdi mdi-codepen menu-icon"></i>
                  <span class="menu-title">Khu vực</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="submenu">
                  <ul>
                    <li class="nav-item">
                      <Link to={"/province"} class="nav-link">
                        Thành phố
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/district"} class="nav-link">
                        Quận, huyện
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/ward"} class="nav-link">
                        Phường, xã
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                  <span class="menu-title">Khác</span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="submenu">
                  <ul>
                    <li class="nav-item">
                      <Link to={"/equipment"} class="nav-link">
                        Trang thiết bị
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/timeslot"} class="nav-link">
                        Thời gian hoạt động
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/career"} class="nav-link">
                        Thể loại phòng
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/bookingschedule"} class="nav-link">
                        Khung giờ Khách đặt
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/servicepackinuse"} class="nav-link">
                        Các gói được sử dụng
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/evaluate"} class="nav-link">
                        Đánh giá
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"/statistical"} class="nav-link">
                        Thống kê
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopNav;
