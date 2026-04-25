import React from "react";
import titleimage from "../../assets/images/titleimage.jpg"; // ✅ Add correct extension like .jpg or .png
import "./About.css";
import Fotter from '../Fotter/Fotter.jsx'
import Teams from "../Teams/Teams";

const About = () => {
  return (
    <div className="about-colour">
      <div className="about-wrapper">
        <div className="about-title-section">
          <div className="about-title-image">
            <img src={titleimage} alt="About Us Banner" />
          </div>
          <div className="about-title-content">
            <h1>About Us</h1>
            <p>
              Welcome to PBC – Your Destination for Unique Personalized Gifts <br /><br />At
              PBC, we specialize in creating one-of-a-kind gifts that celebrate
              memories and add a personal touch to every occasion. Our offerings
              include: <br /> <br /><li>Thread Art Portraits</li> <li>String Art & Customized Frames</li> 
              <li>Artificial Flower Bouquets</li> <li>Personalized Hampers </li><li>Memories Jars &
              Explosion Boxes</li> <li> …and more custom creations designed just for you.</li> <br /><br />
              Operating under Thread Arts and Portraits, we transform your
              cherished photos and ideas into stunning handcrafted artworks.
              From thread and string portraits to bespoke gift items, our
              talented artists bring your vision to life with care and
              precision. <br /><br/>
              Why Choose PBC? <br /><br /><li>Expertly crafted thread and string art,
              comparable to traditional artworks.</li> <li>Skilled artists dedicated to
              delivering quality and creativity.</li><li>100% satisfaction guaranteed —
              collaborate with our team until your gift is just the way you
              imagined. </li><li> Express delivery available for last-minute surprises. 
              Perfect for birthdays, anniversaries, weddings, or simply
              expressing love and appreciation.</li> <li>At PBC, we don’t just create
              gifts — we create lasting memories.</li>
            </p>
          </div>
        </div>
      </div>
     <Teams/>
     <Fotter/>
    </div>
  );
};

export default About;
