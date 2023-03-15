import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  const [login, setLogin] = useState(true);
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
    
    <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
      <div class="wrapper"></div>
      <div class="container-fluid all-show">
        <a class="navbar-brand" href="#">
          Penton <i class="fa fa-codepen"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Events
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                contact
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-search"></i>
              </a>
            </li>
          </ul>
          <div class="d-flex flex-column sim">
            <span>1 item added to your quote</span>
            <small class="text-primary">view your quote</small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
