import React from 'react';
import './Teams.css';
import Teamboy from '../../assets/images/Teamboy.jpg'; // Replace with your actual paths
import Leader from "../../assets/images/Leader.jpg"
import saketh from "../../assets/images/saketh.jpg"
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const teamData = [
  {
    name: 'Bhavana ',
    role: 'Thread Art Designer',
    desc: 'Bhavana is a creative designer focusing on handcrafted thread portraits with precision and innovation.',
    image: Leader,
    instagram: 'https://www.instagram.com/portraits_by_couple?utm_source=qr&igsh=YXBjNW9kaWxyN3R5',
    youtube: 'https://youtube.com/@portrait.by.couple?si=2mEMdSmUqvpY8OgB'
  },
  {
    name: 'Durga Prasad',
    role: 'Creative Lead',
    desc: 'Durga Prasad ensures that each project reflects powerful storytelling and visual beauty.',
    image: Teamboy,
    instagram: 'https://www.instagram.com/portraits_by_couple?utm_source=qr&igsh=YXBjNW9kaWxyN3R5',
    youtube: 'https://youtube.com/@portrait.by.couple?si=2mEMdSmUqvpY8OgB'
  },
  {
    name: 'Saketh ',
    role: 'Art Designer',
    desc: 'Saketh, a creative designer focusing on hand-drawn art and illustrations, blending precision with artistic innovation.',
    image: saketh,
    instagram: 'https://www.instagram.com/portraits_by_couple?utm_source=qr&igsh=YXBjNW9kaWxyN3R5',
    youtube: 'https://youtube.com/@portrait.by.couple?si=2mEMdSmUqvpY8OgB'
  },
];

const Teams = () => {
  return (
    <div className="team-section">
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>Passionate minds behind our creative journey.</p>
      </div>
      <div className="team-cards">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="desc">{member.desc}</p>
            <div className="team-icons">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={member.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
