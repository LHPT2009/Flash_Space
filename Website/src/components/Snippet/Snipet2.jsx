import "./Snipet2.css";
const Snipet2 = () => {
  return (
    <div
      class="static-slider10 mb-5"
      style={{
        backgroundImage:
          "linear-gradient(to top,transparent, #000 100%),url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600)",
      }}
    >
      <div class="container">
        <div class="row justify-content-center ">
          <div class="col-md-8 align-self-center text-center">
            <span class="badge rounded-pill badge-inverse text-white font-weight-light px-3 py-1">
              Đánh giá từ giới phê bình
            </span>
            <h1 class="my-3 title text-white text-uppercase">
              Được bình chọn là dự án sản phẩm đáng mong đợi
            </h1>
            <h6 class="text-white font-weight-normal op-8">
              Là một hệ thống đầy hứa hẹn với nhiều tính năng vượt trội so với
              thị trường trong nước với tính cạnh tranh cao
            </h6>
            <a class="btn btn-outline-light rounded-pill btn-md mt-3" href="">
              <span>Vậy bạn cần hỗ trợ gì không ?</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snipet2;
