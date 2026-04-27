import React, { useState } from "react";
import "./ReviewForm.css";
import axios from "axios";

const ReviewForm = () => {
  const [form, setForm] = useState({
    name: "",
    rating: "",
    info: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("rating", form.rating);
    data.append("info", form.info);
    data.append("image", form.image);

    await axios.post("http://localhost:5000/api/reviews/add", data);

    alert("Review Added ✅");
  };

  return (
    <div className="review-form-container">
      <div className="form-box">
        <h2>Add Review 💖</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            onChange={handleChange}
          />

          <textarea
            name="info"
            placeholder="Write your review..."
            onChange={handleChange}
          ></textarea>

          <input type="file" onChange={handleImage} />

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* IMAGE SIDE */}
      <div className="image-box">
        {preview ? (
          <img src={preview} alt="preview" />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="review"
          />
        )}
      </div>
    </div>
  );
};

export default ReviewForm;