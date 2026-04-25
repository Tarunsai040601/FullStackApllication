import React, { useEffect, useState } from "react";
import "./UserHome.css";
import thread from '../../../assets/images/thread.jpg'
import threading_02 from '../../../assets/images/threading_02.jpeg'
import threading_03 from '../../../assets/images/threading_03.jpeg'
import photo1 from '../../../assets/images/photo1.jpg'
import photo3 from '../../../assets/images/photo3.jpg'
import newphoto from '../../../assets/images/newphoto.jpg'
import classicPhoto from '../../../assets/images/classicPhoto.jpg'
import com_01 from '../../../assets/images/com_01.jpeg'
import collegoues from '../../../assets/images/collegoues.jpg'
const heroImages = [
  "https://bycraftroom.com/cdn/shop/files/IMG_4846.jpg?v=1774621963&width=3024",
  "https://diybaazar.com/publicuploads/seller/products/name-string-art-wall-hanging-thread-and-nail-art-1-1_1742171080.jpg",
  "https://t4.ftcdn.net/jpg/18/07/58/11/360_F_1807581180_gpXB2Q7yTogdeVnvP44sJccRz7ZVhYif.jpg",
  "https://images.squarespace-cdn.com/content/v1/60ad4dc8c9a050508182af86/0c1933d1-91e7-4b89-8a87-24560705e2d4/Key+image+collage+horizontal.png",
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
    }, 2000);

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
            <img src={classicPhoto}/>
          </div>
          <div className="frame">
            <img src={com_01} />
          </div>
          <div className="frame">
            <img src={collegoues} />
          </div>
        </div>
      </div>

      {/* 2️⃣ THREADING IMAGES */}
      <div className="section">
        <h2>Thread Art</h2>

        <div className="image-row">
          <div className="thread-card">
            <img src={thread} />
          </div>
          <div className="thread-card">
            <img src={threading_03} />
          </div>
          <div className="thread-card">
            <img src={threading_02} />
          </div>
        </div>
      </div>

      {/* 3️⃣ GIFTS */}
      <div className="section">
        <h2>Customized Gifts 🎁</h2>

        <div className="image-row">
          <div className="gift-card">
            <img src={photo1} />
            <p>Glass Jar </p>
          </div>

          <div className="gift-card">
            <img src={photo3} />
            <p>Gift Hamper</p>
          </div>

          <div className="gift-card">
            <img src={newphoto} />
            <p>Love Combo</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserHome;