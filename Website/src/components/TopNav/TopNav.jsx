import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
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
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="text-uppercase mb-4 font-weight-bold text-warning"
            style={{ textDecoration: "none" }}
          >
            FLASH SPACE
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <Link key={item.name} className="btn" to={item.path}>
                <div className="list_item">{item.name}</div>
              </Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Link to={"/login"} className="btn btn-success">
              Đăng nhập
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
