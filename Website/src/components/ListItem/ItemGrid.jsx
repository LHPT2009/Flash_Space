import { Link } from "react-router-dom";
import "./ItemGrid.css";

const ItemGrid = (props) => {
  return (
    <Link
      to={"/detailroom"}
      class="card"
      style={{ maxWidth: "100%", textDecoration: "none" }}
    >
      <div class="row">
        <div class="col-sm-6">
          <img src={props.image} class="card-img h-100" alt="..." />
        </div>
        <div class="col-sm-6 d-flex flex-column text-black">
          <div class="card-body" style={{ padding: "15px" }}>
            <small>{props.cate}</small>
            <h5 class="card-title">{props.name}</h5>
            <span class="pull-left">
              <span class="price">{props.price}</span>
              <span class="period">VNĐ/1h</span>
            </span>
            <p class="card-text">{props.content}</p>
            <i class="fa fa-user"></i> {props.amount}
          </div>
          <div class="footer">
            <small class="text-muted">{props.date}</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemGrid;
