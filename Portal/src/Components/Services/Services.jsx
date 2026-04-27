import React from 'react';
import './Services.css';
import { FaSeedling, FaGift, FaTruck, FaPalette, FaHeart, FaBirthdayCake, FaRibbon, FaHome, FaBoxOpen, FaLightbulb } from 'react-icons/fa';
import Fotter from '../Fotter/Fotter.jsx'
import Location from '../Loaction/Location.jsx'

const servicesData = [
  {
    title: "Artificial Flower Bouquets",
    icon: <FaSeedling />,
    description: "Beautiful handcrafted artificial flower bouquets.",
  },
  {
    title: "Threading Arts",
    icon: <FaPalette />,
    description: "Creative threading art pieces to decorate your space.",
  },
  {
    title: "Gifts",
    icon: <FaGift />,
    description: "Party, anniversary, and birthday gifts for loved ones.",
  },
  {
    title: "Home Delivery",
    icon: <FaTruck />,
    description: "Fast and safe delivery straight to your doorstep.",
  },
  {
    title: "Customized Orders",
    icon: <FaHeart />,
    description: "Personalized gifts and art pieces made just for you.",
  },
  {
    title: "Birthday Cakes",
    icon: <FaBirthdayCake />,
    description: "Delicious and beautifully decorated cakes for birthdays.",
  },
  {
    title: "Event Decoration",
    icon: <FaRibbon />,
    description: "Decor services for parties, weddings, and special events.",
  },
  {
    title: "Home Decor",
    icon: <FaHome />,
    description: "Decorative items to beautify your home or office.",
  },
  {
    title: "DIY Kits",
    icon: <FaBoxOpen />,
    description: "Creative DIY kits for fun and artistic projects.",
  },
  {
    title: "Creative Ideas & Consulting",
    icon: <FaLightbulb />,
    description: "Get advice and ideas to make your events unique and memorable.",
  },
];

const Services = () => {
  return (
    <div>
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Location/>
  <Fotter/>
    </div>
  );
};

export default Services;
