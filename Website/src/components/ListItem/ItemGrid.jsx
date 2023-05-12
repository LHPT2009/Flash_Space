import { Link } from "react-router-dom";
import "./ItemGrid.css";

const ItemGrid = (props) => {
  return (
    <Link
      to={`/detailroom/${props._id}`}
      class="card"
      style={{ maxWidth: "100%", textDecoration: "none" }}
    >
      <div class="row">
        <div class="col-sm-6">
          <img
            src={`http://localhost:8000/singleimage/${props.mainimage}`}
            class="card-img h-100"
            alt="..."
            height={50}
          />
        </div>
        <div class="col-sm-6 d-flex flex-column text-black">
          <div class="card-body" style={{ padding: "15px" }}>
            <small>{props.careername}</small>
            <h5 class="card-title">{props.subject}</h5>
            <span class="pull-left">
              <span class="price">{props.price}</span>
              <span class="period">VNĐ/1h</span>
            </span>
            <p class="card-text">{props.describe}</p>
            <i class="fa fa-user"></i> {props.quantity}
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
