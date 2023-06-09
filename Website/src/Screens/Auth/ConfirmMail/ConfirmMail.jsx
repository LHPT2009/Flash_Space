import "./ConfirmMail.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const ConfirmMail = () => {
  const search = useLocation().search;
  const confirm = new URLSearchParams(search).get("confirm");
  const userid = jwt_decode(confirm).id;

  const confirmmail = async () => {
    const confirm = await axios
      .get(`http://localhost:8000/auth/confirmemail/${userid}`)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Cảm ơn bạn đã xác thực Mail!",
          showConfirmButton: true,
        });
      });
  };

  useEffect(() => {
    confirmmail();
  }, []);
  return (
    <>
      <TopNav />
      <div
        className="bodyconfirmmail"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div class="container">
          <div class="cardlogin">
            <div class="row g-0">
              <div class="col-md-6">
                <div
                  class="d-flex justify-content-center align-items-center"
                  style={{ height: "450px" }}
                >
                  <div class="py-4 px-3 w-75">
                    <h4>Xác thực thành công mời bạn về trang đăng nhập!</h4>
                    <div class="row mt-2">
                      <div class="col-md-12">
                        <Link className="btn btn-primary w-100" to={"/login"}>
                          Về trang đăng nhập
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="right-side-content-reset">
                  <div
                    class="content d-flex flex-column"
                    style={{ top: "210px", left: "60px" }}
                  >
                    <h3 className="text-warning">FLASH SPACE</h3>
                    <h5>Ứng dụng thuê phòng nhanh chóng và tiện lợi</h5>
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

export default ConfirmMail;
