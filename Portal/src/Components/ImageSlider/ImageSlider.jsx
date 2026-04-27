import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import Fotter  from '../Fotter/Fotter.jsx'

const images = [
  "https://www.artsty.com/cdn/shop/files/IMG-20250311-WA0075.jpg?v=1742906281",
  "https://beyondgifts.com/cdn/shop/files/Snapinsta.app_295756044_737690737505121_6714535452788091692_n_1080_33ec517f-6b88-46e7-b680-d232e030fbd5.jpg?v=1750146910",
  "https://pocgifts.com/cdn/shop/files/2_mockup_4.jpg?v=1768582717&width=1445",

  "https://www.artsty.com/cdn/shop/files/IMG-20250311-WA0075.jpg?v=1742906281",
  "https://beyondgifts.com/cdn/shop/files/Snapinsta.app_295756044_737690737505121_6714535452788091692_n_1080_33ec517f-6b88-46e7-b680-d232e030fbd5.jpg?v=1750146910",
  "https://pocgifts.com/cdn/shop/files/2_mockup_4.jpg?v=1768582717&width=1445",

  "https://www.artsty.com/cdn/shop/files/IMG-20250311-WA0075.jpg?v=1742906281",
  "https://beyondgifts.com/cdn/shop/files/Snapinsta.app_295756044_737690737505121_6714535452788091692_n_1080_33ec517f-6b88-46e7-b680-d232e030fbd5.jpg?v=1750146910",
  "https://pocgifts.com/cdn/shop/files/2_mockup_4.jpg?v=1768582717&width=1445",

  "https://beyondgifts.com/cdn/shop/files/Snapinsta.app_295756044_737690737505121_6714535452788091692_n_1080_33ec517f-6b88-46e7-b680-d232e030fbd5.jpg?v=1750146910",
  "https://pocgifts.com/cdn/shop/files/2_mockup_4.jpg?v=1768582717&width=1445",

  "https://pocgifts.com/cdn/shop/files/2_mockup_4.jpg?v=1768582717&width=1445",

  "https://www.artsty.com/cdn/shop/files/IMG-20250311-WA0075.jpg?v=1742906281",
  "https://beyondgifts.com/cdn/shop/files/Snapinsta.app_295756044_737690737505121_6714535452788091692_n_1080_33ec517f-6b88-46e7-b680-d232e030fbd5.jpg?v=1750146910",
  "https://pocgifts.com/cdn/shop/files/2_mockup_4.jpg?v=1768582717&width=1445",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  // ⏩ auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img src={img} alt={`slide-${i}`} key={i} />
        ))}
      </div>
    </div>
    <Fotter/>
    </>
  );
};

export default ImageSlider;
