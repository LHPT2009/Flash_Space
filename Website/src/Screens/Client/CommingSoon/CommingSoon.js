import "./CommingSoon.css";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <>
      <TopNav />
      <div
        className="bodycommingsoon"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div class="container">
          <div class="cardlogin">
            <div class="row g-0">
              <div class="col-md-12 text-center">
                <div class="right-side-content-login">
                  <div
                    class="content d-flex flex-column"
                    style={{
                      left: "50%",
                      transform: `translate(-50%, 0)`,
                      top: "30%",
                    }}
                  >
                    <h2 className="text-warning">FLASH SPACE</h2>
                    <h5>Hệ thống cập nhật sau, cảm ơn bạn dẵ quan tâm!</h5>
                    <Link class="btn btn-primary" to={"/"}>
                      Về trang chủ
                    </Link>
                  </div>
                  <div class="right-side">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <img src="https://i.imgur.com/kWmyZvb.jpg" />
                    </span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <img src="https://i.imgur.com/U0863iD.jpg" />
                    </span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="parallelogram">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommingSoon;
