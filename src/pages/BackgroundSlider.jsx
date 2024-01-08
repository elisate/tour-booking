import React, { useState, useEffect } from "react";
import "./BackgroundSlider.css";
import  './home.css';



const slides = [
  {
    image: "mountain.jpg",
    text: "",
  },
  {
    image: "image.jpg",
    text: "",
  },
  {
    image: "india3.jpg",
    text: "",
  },
  {
image:"houses.jpg",
text:"",
  },
];

function BackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentSlide]);

  const backgroundImageStyle = {
    backgroundImage: `url(${slides[currentSlide].image})`,
  };

  return (
    <div className="background-slider" style={backgroundImageStyle}>
      <div className="slider-content">
        <div>
          <div className="bigtext">
           
            <div className="text1">
             <p> <b>Enjoy The Travel With</b></p> 
            </div>
            <div className="text2">
              <p>Holday Planner</p>
            </div>
            <div className="text3">
              <div>
                A journey of 1000 miles start with single step to import. the
                Demo
              </div>
              <div>
                content with one click and create a head-turning website for
              </div>

              <div className="subtext3"> travel agency</div>
            </div>
          </div>
        </div>

        <h1>{slides[currentSlide].text}</h1>
      </div>
    </div>
  );
}

export default BackgroundSlider;
