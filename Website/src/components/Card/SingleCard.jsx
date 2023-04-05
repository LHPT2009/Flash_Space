import { Link } from "react-router-dom";

const SingleCard = (props) => {
  return (
    <Link to={"/detailroom"} className="card m-1" style={{textDecoration:"none"}}>
      <img class="card-img-top" src={props.url} alt="Card image cap" />
      <div class="card-body" style={{ padding: "15px" }}>
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.price}</p>
        <p class="card-text">{props.description}</p>
      </div>
      <div class="footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </Link>
  );
};

export default SingleCard;
