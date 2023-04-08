import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleCard from "../Card/SingleCard";
import { roomData, responsive } from "../Card/Data";

const room = roomData.map((item) => (
  <SingleCard
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
  />
));

const CarouselsCard = (props) => {
  return (
    <div className="mt-3 mb-3">
      <blockquote class="text-center">
        <p class="mb-3">{props.title}</p>
        <footer class="blockquote-footer">
          {props.content} <cite title="Source Title">{props.note}</cite>
        </footer>
      </blockquote>
      <Carousel responsive={responsive}>{room}</Carousel>
    </div>
  );
};

export default CarouselsCard;
