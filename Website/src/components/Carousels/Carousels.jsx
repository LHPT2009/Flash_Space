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
          className="w-100 image"
          src="https://cdn.mos.cms.futurecdn.net/wFzEvUmaoVtNimMMnQSgMR.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "#FFC107" }}>Công việc</h3>
          <p style={{ color: "#000", fontSize: "20px" }}>
            Chúng tôi có đa dạng về loại phòng và chúng tôi tin mình có thể hỗ
            trợ tốt cho bạn
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
