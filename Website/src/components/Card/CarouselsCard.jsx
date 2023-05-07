import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleCard from "../Card/SingleCard";

const CarouselsCard = (props) => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/room`
      )
      .then((res) => {
        setRoomData(res.data);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const roomfilter = roomData
    .filter((n) => n._id !== "6452a565c33ced564a4ab3b4")
    .filter((t) => t.idcareer._id == props.idcareer);

  const room = roomfilter.map((item) => (
    <SingleCard
      _id={item._id}
      subject={item.subject}
      mainimage={item.mainimage}
      price={item.price}
      description={item.describe}
      careername={item.idcareer.careername}
    />
  ));
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
