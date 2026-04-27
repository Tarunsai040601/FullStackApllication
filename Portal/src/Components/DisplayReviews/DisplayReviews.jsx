import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisplayReviews.css";

const API = "http://localhost:4000/api/reviews";

const DisplayReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    axios.get(`${API}/get`)
      .then((res) => {
        setReviews(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="reviews">
      <h1>Customer Reviews 🎥</h1>

      <div className="review-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r._id}>
            
            {/* 🎥 VIDEO */}
            <video controls width="100%">
              <source src={r.video.url} type="video/mp4" />
            </video>

            {/* 📄 TEXT */}
            <h3>{r.title}</h3>
            <p>{r.description}</p>

            <span className="author">By: {r.createdBy}</span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayReviews;