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

const CarouselsCard = () => {
  return (
    <div>
      <blockquote class="text-center">
        <p class="mb-3">Lĩnh vực giải trí</p>
        <footer class="blockquote-footer">
          Nhiều loại phòng phù hợp với{" "}
          <cite title="Source Title">Giá cả hợp lý</cite>
        </footer>
        <Carousel responsive={responsive}>{room}</Carousel>
      </blockquote>
    </div>
  );
};

export default CarouselsCard;
