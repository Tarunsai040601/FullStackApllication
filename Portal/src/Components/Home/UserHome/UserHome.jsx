import React, { useEffect, useState } from "react";
import "./UserHome.css";

const heroImages = [
  "https://cdn.shopify.com/s/files/1/0733/5539/5383/files/7_a4beab89-9c77-4bfa-97a6-0fd26cfe9509.jpg?v=1692777162",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1513885535751-8b9238bd345a",
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48"
];

const UserHome = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // change every 1 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url(${heroImages[currentImage]})
          `,
        }}
      >
        <h1>Portraits by Couples</h1>
        <p>Capturing the beautiful moments together 💖</p>
      </div>

      {/* 1️⃣ PHOTO FRAMES */}
      <div className="section">
        <h2>Our Portraits</h2>

        <div className="image-row">
          <div className="frame">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" />
          </div>
          <div className="frame">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" />
          </div>
          <div className="frame">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" />
          </div>
        </div>
      </div>

      {/* 2️⃣ THREADING IMAGES */}
      <div className="section">
        <h2>Thread Art</h2>

        <div className="image-row">
          <div className="thread-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" />
          </div>
          <div className="thread-card">
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
          </div>
          <div className="thread-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
          </div>
        </div>
      </div>

      {/* 3️⃣ GIFTS */}
      <div className="section">
        <h2>Customized Gifts 🎁</h2>

        <div className="image-row">
          <div className="gift-card">
            <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a" />
            <p>Chocolate Box</p>
          </div>

          <div className="gift-card">
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48" />
            <p>Gift Hamper</p>
          </div>

          <div className="gift-card">
            <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0" />
            <p>Love Combo</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserHome;