import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="location-section">
      <h2 className="location-heading">GET IN TOUCH WITH US</h2>
      <div className="location-wrapper">
        {/* Address */}
        <div className="location-details">
          <h3>Home Address:</h3>
          <p>
            <strong>Portraits by Couple</strong> (Handmade Gifting Studio)
          </p>
          <p>
            Asian Grande, Plot no 194, 195, Rd Number 8, Padma Nagar Phase II Ln, 
            Quthbullapur, Hyderabad, Telangana 500054
          </p>

          <h4>For help and support:</h4>
          <p>
            Email: <a href="mailto:portraitbycouple@gmail.com">portraitbycouple@gmail.com</a><br />
            Phone No: +91 - 7997548544 , 9849923833
          </p>

        </div>

        {/* Google Map */}
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2484734733835!2d78.46489987493733!3d17.495648383410064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91353fafb8ab%3A0x1170db50c2ba4e28!2sAsian%20Grande!5e0!3m2!1sen!2sin!4v1755434373169!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
