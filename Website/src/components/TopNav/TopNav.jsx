import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div
        class="container-fluid text-white d-none d-lg-flex"
        style={{ backgroundColor: "#004274" }}
      >
        <div class="container py-3">
          <div class="d-flex align-items-center">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h2 class=" fw-bold m-0" style={{ color: "#FFC107" }}>
                FLASH SPACE
              </h2>
            </Link>
            <div class="ms-auto d-flex align-items-center">
              <small class="ms-4">
                <i class="fa fa-map-marker-alt me-3"></i>475A Đ. Điện Biên Phủ,
                Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
              </small>
              <small class="ms-4">
                <i class="fa fa-envelope me-3"></i>flashspace@gmail.com
              </small>
              <small class="ms-4">
                <i class="fa fa-phone-alt me-3"></i>+92 651561561
              </small>
              <div class="ms-3 d-flex">
                <a
                  class="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                  href=""
                >
                  <i class="fab fa-facebook-f" style={{ color: "#004274" }}></i>
                </a>
                <a
                  class="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                  href=""
                >
                  <i class="fab fa-twitter" style={{ color: "#004274" }}></i>
                </a>
                <a
                  class="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                  href=""
                >
                  <i
                    class="fab fa-linkedin-in"
                    style={{ color: "#004274" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid sticky-top"
        style={{
          backgroundColor: "#004274",
        }}
      >
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light p-lg-0">
            <Link to={"/"} class="navbar-brand d-lg-none">
              <h1 class="fw-bold m-0" style={{ color: "#FFC107" }}>
                FLASH SPACE
              </h1>
            </Link>
            <button
              type="button"
              class="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span
                class="navbar-toggler-icon text-white"
                style={{ color: "white" }}
              ></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav mt-2 mb-2">
                <Link to={"/"} className="nav-item nav-link text-white active">
                  Trang chủ
                </Link>
                <Link
                  to={"/room"}
                  className="nav-item nav-link text-white active"
                >
                  Phòng
                </Link>
                <Link
                  to={"/contact"}
                  className="nav-item nav-link text-white active"
                >
                  Liên hệ
                </Link>
                <Link
                  to={"/service"}
                  className="nav-item nav-link text-white active"
                >
                  Dịch vụ
                </Link>
                <div class="d-lg-none">
                  {check ? (
                    <Link
                      to={"/login"}
                      className="btn btn-primary rounded-pill py-2 px-3 text-white w-100"
                    >
                      Đăng nhập
                    </Link>
                  ) : (
                    <div class="nav-item dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle text-white w-100"
                        data-bs-toggle="dropdown"
                      >
                        Xin chào Lê Huỳnh Phương Tùng!
                      </a>
                      <div
                        class="dropdown-menu rounded-0 rounded-bottom m-0 w-100"
                        style={{ backgroundColor: "rgba(0, 66, 116,0.5)" }}
                      >
                        <Link
                          to={"/infouser"}
                          className="dropdown-item text-white"
                        >
                          Thông tin cá nhân
                        </Link>
                        <Link
                          to={"/history"}
                          className="dropdown-item text-white"
                        >
                          Lịch sử đặt phòng
                        </Link>
                        <Link
                          to={"/favourite"}
                          className="dropdown-item text-white"
                        >
                          Phòng yêu thích
                        </Link>
                        <Link to={"/"} className="dropdown-item text-white">
                          Đăng xuất!
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div class="ms-auto d-none d-lg-block">
                {check ? (
                  <Link
                    to={"/login"}
                    className="btn btn-primary rounded-pill py-2 px-3 text-white w-100"
                  >
                    Đăng nhập
                  </Link>
                ) : (
                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle text-white w-100"
                      data-bs-toggle="dropdown"
                    >
                      Xin chào Lê Huỳnh Phương Tùng!
                    </a>
                    <div
                      class="dropdown-menu rounded-0 rounded-bottom m-0 w-100"
                      style={{ backgroundColor: "rgba(0, 66, 116,0.5)" }}
                    >
                      <Link
                        to={"/infouser"}
                        className="dropdown-item text-white"
                      >
                        Thông tin cá nhân
                      </Link>
                      <Link
                        to={"/history"}
                        className="dropdown-item text-white"
                      >
                        Lịch sử đặt phòng
                      </Link>
                      <Link
                        to={"/favourite"}
                        className="dropdown-item text-white"
                      >
                        Phòng yêu thích
                      </Link>
                      <Link to={"/"} className="dropdown-item text-white">
                        Đăng xuất!
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div class="ms-auto align-items-center d-lg-none">
                <ul class="list-group list-group-horizontal-lg">
                  <li class="list-group-item">
                    <i class="fa fa-map-marker-alt me-3"></i>475A Đ. Điện Biên
                    Phủ, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh
                  </li>
                  <li class="list-group-item">
                    <i class="fa fa-envelope me-3"></i>flashspace@gmail.com
                  </li>
                  <li class="list-group-item">
                    <i class="fa fa-phone-alt me-3"></i>+92 651561561
                  </li>
                  <li class="list-group-item">
                    <a
                      class="btn btn-sm-square btn-dark text-primary rounded-circle ms-2"
                      href=""
                    >
                      <i
                        class="fab fa-facebook-f"
                        style={{ color: "#fff" }}
                      ></i>
                    </a>
                    <a
                      class="btn btn-sm-square btn-dark text-primary rounded-circle ms-2"
                      href=""
                    >
                      <i class="fab fa-twitter" style={{ color: "#fff" }}></i>
                    </a>
                    <a
                      class="btn btn-sm-square btn-dark text-primary rounded-circle ms-2"
                      href=""
                    >
                      <i
                        class="fab fa-linkedin-in"
                        style={{ color: "#fff" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
