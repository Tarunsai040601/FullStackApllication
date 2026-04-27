import React, { useEffect, useState } from "react";
import whatsapp from "../../assets/images/whatsapp.jpg";
import "./Whatsapp.css";

const Whatsapp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState("");
  const [voiceCount, setVoiceCount] = useState(0);

  // 🎤 TEXT TO SPEECH
  const speakMessage = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const name = user?.email || "Guest";
    const formatted = name.split("@")[0];

    setUserName(formatted);

    const interval = setInterval(() => {
      setShowPopup(true);

      // 👉 VOICE ONLY 3 TIMES
      setVoiceCount((prev) => {
        const newCount = prev + 1;

        if (newCount <= 2) {
          const message = `Hey WhatsApp ${formatted}, any queries reach out here`;
          speakMessage(message);
        }

        return newCount;
      });

      // hide popup after 1.8 sec
      setTimeout(() => {
        setShowPopup(false);
      }, 1800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* POPUP (ALWAYS) */}
      {showPopup && (
        <div className="wa-popup">
          👋 Hey WhatsApp, {userName} any queries reach out here..!
        </div>
      )}

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917997548544?text=Hello! I need more information"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsapp}
          alt="Chat on WhatsApp"
          className="whatsapp-button"
        />
      </a>
    </div>
  );
};

export default Whatsapp;