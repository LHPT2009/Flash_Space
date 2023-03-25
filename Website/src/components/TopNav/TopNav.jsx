import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  // const [login, setLogin] = useState(true);
  const menuData = [
    {
      path: "/",
      name: "Trang chủ",
    },
    {
      path: "/room",
      name: "Phòng",
    },
    {
      path: "/contact",
      name: "Liên hệ",
    },
    {
      path: "/service",
      name: "Dịch vụ",
    },
  ];
  return (
    <div>
      <div
        class="container-fluid text-white d-none d-lg-flex"
        style={{ backgroundColor: "#004274" }}
      >
        <div class="container py-3">
          <div class="d-flex align-items-center">
            <a href="index.html" style={{ textDecoration: "none" }}>
              <h2 class=" fw-bold m-0" style={{ color: "#FFC107" }}>
                FLASH SPACE
              </h2>
            </a>
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
            <a href="index.html" class="navbar-brand d-lg-none">
              <h1 class="fw-bold m-0" style={{ color: "#FFC107" }}>
                FLASH SPACE
              </h1>
            </a>
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
                <a
                  href="index.html"
                  class="nav-item nav-link text-white active"
                >
                  Home
                </a>
                <a href="about.html" class="nav-item nav-link text-white">
                  About
                </a>
                <a href="service.html" class="nav-item nav-link text-white">
                  Services
                </a>
                <a href="project.html" class="nav-item nav-link text-white">
                  Projects
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle text-white"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div
                    class="dropdown-menu rounded-0 rounded-bottom m-0"
                    style={{ backgroundColor: "rgba(0, 66, 116,0.5)" }}
                  >
                    <a href="feature.html" class="dropdown-item text-white">
                      Features
                    </a>
                    <a href="team.html" class="dropdown-item text-white">
                      Our Team
                    </a>
                    <a href="testimonial.html" class="dropdown-item text-white">
                      Testimonial
                    </a>
                    <a href="quote.html" class="dropdown-item text-white">
                      Quotation
                    </a>
                    <a href="404.html" class="dropdown-item text-white">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" class="nav-item nav-link text-white">
                  Contact
                </a>
                <div class="d-lg-none">
                  <a
                    href=""
                    class="btn btn-primary rounded-pill py-2 px-3 text-white w-100"
                  >
                    Đăng nhập
                  </a>
                </div>
              </div>
              <div class="ms-auto d-none d-lg-block">
                <a
                  href=""
                  class="btn btn-primary rounded-pill py-2 px-3 text-white"
                >
                  Đăng nhập
                </a>
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
