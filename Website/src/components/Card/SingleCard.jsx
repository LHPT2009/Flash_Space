import { Link } from "react-router-dom";

const SingleCard = (props) => {
  return (
    <Link
      to={`/detailroom/${props._id}`}
      className="card m-1 text-black"
      style={{ textDecoration: "none" }}
    >
      <img
        class="card-img-top"
        src={`http://localhost:8000/singleimage/${props.mainimage}`}
        alt="Card image cap"
        style={{ height: "300px", width: "100%" }}
      />
      <div class="card-body" style={{ padding: "15px" }}>
        <small>{props.careername}</small>
        <h5 class="card-title">{props.subject}</h5>
        <span class="pull-left">
          <span class="price">{props.price}VNĐ/1h</span>
        </span>
        <p class="card-text">{props.describe}</p>
        <div className="row">
          <div className="col-auto">
            <i class="fa fa-user"></i> {props.quantity}
          </div>
          <div className="col-auto">
            <i class="fa fa-expand-arrows-alt"></i> {props.length}m X{" "}
            {props.width}m
          </div>
        </div>
      </div>
      <div class="footer" style={{ height: "75px" }}>
        <small class="text-muted">{props.dress}</small>
      </div>
    </Link>
  );
};

export default SingleCard;
