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
        <i class="fa fa-user"></i> 5
      </div>
      <div class="footer">
        <small class="text-muted">07/04/2023</small>
      </div>
    </Link>
  );
};

export default SingleCard;
