import { Link } from "react-router-dom";
import "./ItemGrid.css";

const ItemGrid = (props) => {
  return (
    <Link
      to={`/detailroom/${props._id}`}
      class="card"
      style={{
        textDecoration: "none",
      }}
    >
      <div class="row">
        <div class="col-sm-6">
          <img
            src={`http://localhost:8000/singleimage/${props.mainimage}`}
            class="card-img"
            alt="..."
            style={{ height: "300px" }}
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
            {/* <i class="fa fa-user"></i> {props.quantity} */}
            <div className="row">
              <div className="col-auto">
                <i class="fa fa-user"></i> {props.quantity}
              </div>
              <div className="col-auto">
                <i class="fa fa-expand-arrows-alt"></i> {props.lengthroom}m X{" "}
                {props.widthroom}m
              </div>
            </div>
          </div>
          <div class="footer">
            <small class="text-muted">{props.location}</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemGrid;
