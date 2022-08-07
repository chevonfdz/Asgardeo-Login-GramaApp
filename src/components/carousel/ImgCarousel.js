import React from "react";
import "./ImgCarouselStyles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Register from "../../assets/register.png";
import Login from "../../assets/login.png";
import NIC from "../../assets/nic.png";
import Address from "../../assets/addr.png";
import Generate from "../../assets/generate.png";

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={Register} alt="/" />
          {<p className="legend">Register</p>}
        </div>
        <div>
          <img src={Login} alt="/" />
          {<p className="legend">Login to the system</p>}
        </div>
        <div>
          <img src={NIC} alt="/" />
          {<p className="legend">Enter NIC</p>}
        </div>
        <div>
          <img src={Address} alt="/" />
          {<p className="legend">Enter address</p>}
        </div>
        <div>
          <img src={Generate} alt="/" />
          {<p className="legend">Generate certificate</p>}
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
