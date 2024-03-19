import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const timelineTimes = [
  '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

function CarouselSlider({ isMobile }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSlideChange = (event) => {
    setCurrentImageIndex(event.item.index);
  };

  return (
    <OwlCarousel
      className="owl-theme"
      loop={false}
      mouseDrag={false}
      autoplay={false}
      items={isMobile ? 1 : 3}
      responsive={{
        0: {
          items: 1,
          slideBy: 1,
        },
        600: {
          items: 3,
          slideBy: 1,
        },
        1280: {
          items: 8,
          slideBy: 1,
        },
      }}
      onSlideChanged={handleSlideChange}
    >
      {timelineTimes.map((time, index) => (
        <div key={index} className="item">
          {time}
        </div>
      ))}
    </OwlCarousel>
  );
}

export default CarouselSlider;
