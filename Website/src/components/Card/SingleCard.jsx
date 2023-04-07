import { Link } from "react-router-dom";

const SingleCard = (props) => {
  return (
    <Link
      to={"/detailroom"}
      className="card m-1 text-black"
      style={{ textDecoration: "none" }}
    >
      <img class="card-img-top" src={props.url} alt="Card image cap" />
      <div class="card-body" style={{ padding: "15px" }}>
        <small>Văn phòng</small>
        <h5 class="card-title">{props.name}</h5>
        <span class="pull-left">
          <span class="price">{props.price}VNĐ/1h</span>
        </span>
        <p class="card-text">{props.description}</p>
        <i class="fa fa-user"></i> 5
      </div>
      <div class="footer">
        <small class="text-muted">07/04/2023</small>
      </div>
    </Link>
  );
};

export default SingleCard;
