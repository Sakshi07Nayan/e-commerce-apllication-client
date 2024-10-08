import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const HeroSlider = () => {
  return (
    <div>
   
      <Carousel
        showThumbs={true}
        showStatus={false}
        infiniteLoop
        // emulateTouch
        // autoPlay
        useKeyboardArrows
        transitionTime={1000}
        // axis="vertical"
        // selectedItem={1}
        width="600px"
      >
        <div className="slide-holder">
          <img
            alt=""
            src=""
          />
          <div className="text-container">
            <h2>Bugatti Chiron Super Sport 300</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="slide-holder">
          <img
            alt=""
            src="https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg"
          />
          <div className="text-container">
            <h2>Hennessey Venom F5</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="slide-holder">
          <img
            alt=""
            src="https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg"
          />
          <div className="text-container">
            <h2>SSC Tuatara: 300+ mph*</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;