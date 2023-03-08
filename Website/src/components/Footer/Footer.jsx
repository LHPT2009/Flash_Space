const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4" style={{ background: "#004274" }}>
      <div className="container  text-md-left">
        <div className="row  text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              FLASH SPACE
            </h5>
            <p>
              Mọi dịch vụ Thuê sẽ trở nên đơn giản khi bạn đến với chúng tôi
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Phòng thuê
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Nhà cung cấp
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Sáng tạo
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                điều khoản
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Công cụ quản lý
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Dịch vụ
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Thông Tin tài khoản
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Khiếu nại
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Đánh giá dịch vụ
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Hỗ trợ
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Thông tin liên hệ
            </h5>
            <p>
              <i className="fas fa-home mr-3"></i> 475A Đ. Điện Biên Phủ, Phường
              25, Bình Thạnh, Thành phố Hồ Chí Minh
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> flashspace@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> +92 651561561
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> +01 335 633 77
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              Dự án được thiết kế vào năm 2023 bởi nhóm kỹ sư:
              <a href="#" style={{ textDecoration: "none" }}>
                <strong className="text-warning"> FLASH SPACE TEAM</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className=" text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
