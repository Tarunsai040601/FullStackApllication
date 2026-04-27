import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Reviews.css";

const API = "http://localhost:4000/api/reviews";

const Review = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);

  // 🎥 Handle Video Change
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // 🚀 Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      Swal.fire("Please select a video ❌");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", video);

    try {
      await axios.post(`${API}/post`, formData);

      Swal.fire("Uploaded Successfully ✅");

      // reset
      setTitle("");
      setDescription("");
      setVideo(null);
      setPreview(null);

    } catch (error) {
      Swal.fire("Upload Failed ❌");
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload Review 🎥</h1>

      <form onSubmit={handleSubmit} className="upload-form">
        
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="file" accept="video/*" onChange={handleVideoChange} />

        {/* 🎬 Preview */}
        {preview && (
          <video controls className="preview-video">
            <source src={preview} />
          </video>
        )}

        <button type="submit">Upload Review 🚀</button>
      </form>
    </div>
  );
};

export default Review;