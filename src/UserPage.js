import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./UserPage.css";
import { Link } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const UserPage = ({ data }) => {
  const items = data.map((ima) => {
    return (
      <div className="slidContainer">
        <img
          className="sliderImg"
          src={ima.image}
          alt={ima.firstName}
          height="90"
        />
        <span>
          {ima.firstName} {ima.lastName}
        </span>
      </div>
    );
  });
  const responsive = {
    270: {
      items: 2
    },
    400: {
      items: 2
    },
    500: {
      items: 3
    },
    820: {
      items: 4
    },
    1100: {
      items: 5
    },
    1330: {
      items: 6
    }
  };

  return (
    <>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1000}
        disableButtonsControls
        disableDotsControls
        items={items}
        responsive={responsive}
        autoPlay
      />
    </>
  );
};

export default UserPage;
