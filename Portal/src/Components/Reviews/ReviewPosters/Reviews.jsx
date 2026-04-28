import React from "react";
import "./Reviews.css";
import tarunsai from "../../../assets/images/tarunsai.jpg"
import saketh from "../../../assets/images/saketh.jpg"
import xyz from "../../../assets/images/xyz.jpg"
import abc from "../../../assets/images/abc.jpg"
import bindu from '../../../assets/images/bindu.jpg'
import ImageSlider from "../../ImageSlider/ImageSlider";


const reviews = [
  {
    img: tarunsai,
    name: "tarunsai",
    text: "Super experience ❤️ Highly recommended!",
    rating: "★★★★★",
  },
  {
    img: saketh,
    name: "saketh",
    text: "Loved it 😍 Great service!",
    rating: "★★★★☆",
  },
  {
    img: xyz,
    name: "jyshona",
    text: "Very beautiful design 💕",
    rating: "★★★★★",
  },
  {
    img:abc,
    name: "Gyani",
    text: "Awesome UI 🔥 Fully satisfied",
    rating: "★★★★☆",
  },
  {
    img:bindu,
    name: "Bindu Madavi",
    text: "Excellent work",
    rating: "★★★★★",
  },
 
  

];

const Reviews = () => {
  return (
    <>
    <div className="review-wrapper">
      <h2>Customer Reviews 💖</h2>

      <div className="card-slider">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <img src={r.img} alt={r.name} />

            <div className="review-content">
              <h3>{r.name}</h3>
              <p className="rating">{r.rating}</p>
              <p className="text">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <ImageSlider/>
    </>
  );
};

export default Reviews;