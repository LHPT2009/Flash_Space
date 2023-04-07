import { Link } from "react-router-dom";
import "./ItemGridFavourite.css";

const ItemGrid = () => {
  return (
    <Link
      to={"/detailroom"}
      class="card"
      style={{ maxWidth: "100%", textDecoration: "none" }}
    >
      <div class="row">
        <div class="col-sm-6">
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            class="card-img h-100"
            alt="..."
          />
        </div>
        <div class="col-sm-6 d-flex flex-column text-black">
          <div class="card-body" style={{ padding: "15px" }}>
            <small>Văn phòng</small>
            <h5 class="card-title">Phòng cho thuê tập nhạc</h5>
            <span class="pull-left">
              <span class="price">250.000</span>
              <span class="period">VNĐ/1h</span>
            </span>
            <p class="card-text">Đây là một căn phòng phù hợp cho việc...</p>
            <i class="fa fa-user"></i> 5
          </div>
          <div class="footer">
            <small class="text-muted">07/04/2023</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemGrid;
