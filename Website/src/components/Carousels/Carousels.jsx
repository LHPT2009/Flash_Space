import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Carousels.css";

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="image"
          src="https://cdn.mos.cms.futurecdn.net/wFzEvUmaoVtNimMMnQSgMR.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 style={{ color: "#FFC107" }}>Công việc</h4>
          <p style={{ color: "#000" }}>
            Chúng tôi có đa dạng về loại phòng và chúng tôi tin mình có thể hỗ
            trợ tốt cho bạn
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
