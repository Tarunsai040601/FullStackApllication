import { useState } from "react";
import "./Faqs.css";

const faqs = [
  {
    category: "📦 Packages & Pricing",
    items: [
      {
        q: "మీ Package Cost ఎంత?",
        a: "మా wedding package 1.1 లక్షల నుండి 3 లక్షల వరకు ఉంటుంది. మీ requirements బట్టి customized quote ఇవ్వడానికి మాతో contact చేయండి.",
      },
      {
        q: "Wedding Package Customize చేయవచ్చా?",
        a: "అవును! మీకు కావలసిన photographers, videographers సంఖ్య మీరే choose చేయవచ్చు. Ideal technicians గురించి కూడా మేము help చేస్తాం.",
      },
    ],
  },
  {
    category: "🎁 Customised Gifts",
    items: [
      {
        q: "Couple కి Customised Gifts ఏమేమి ఉంటాయి?",
        a: "మేము couple పేరు తో personalized mugs, keychains, cushions, wooden name boards మరియు gift hampers తయారు చేస్తాం. ప్రతి gift unique గా మీ love story చెప్తుంది.",
      },
      {
        q: "Gift కి minimum order ఉంటుందా?",
        a: "లేదు! Single piece నుండి bulk orders వరకు మేము అన్ని orders accept చేస్తాం. Wedding favors కోసం bulk discount కూడా ఉంటుంది.",
      },
      {
        q: "Delivery time ఎంత ఉంటుంది?",
        a: "Customised gifts సాధారణంగా 7–10 working days లో deliver అవుతాయి. Urgent orders కోసం 3–5 days express option కూడా ఉంది.",
      },
    ],
  },
  {
    category: "🖼️ Photo Frames",
    items: [
      {
        q: "ఏ రకమైన Photo Frames చేస్తారు?",
        a: "మేము wooden frames, acrylic frames, collage frames మరియు 3D shadow box frames చేస్తాం. Couple name, date మరియు special quote add చేయవచ్చు.",
      },
      {
        q: "Album delivery ఎంత time పడుతుంది?",
        a: "Photos choose చేసిన తర్వాత album తయారు చేసి deliver చేయడానికి సుమారు 45 days పడుతుంది. Corrections ఉంటే కొంచెం more time తీసుకోవచ్చు.",
      },
      {
        q: "Canvera Albums వాడతారా?",
        a: "మేము Fujifilm Layflat photo print albums వాడతాం — quality లో Canvera తో సమానంగా ఉంటాయి, cost కూడా affordable గా ఉంటుంది. Request ఉంటే Canvera albums కూడా చేస్తాం.",
      },
    ],
  },
  {
    category: "🧵 Threading Arts",
    items: [
      {
        q: "Threading Art అంటే ఏమిటి?",
        a: "Threading Art అనేది nails మరియు colorful threads తో చేసే ఒక unique handmade art form. Couple పేరు, heart shapes, మరియు custom designs తయారు చేయవచ్చు — చాలా elegant గా ఉంటుంది.",
      },
      {
        q: "Threading Art కి design options ఏమేమి ఉన్నాయి?",
        a: "మేము couple initials, wedding date, mandala patterns, portraits మరియు custom shapes చేస్తాం. Color combinations కూడా మీరు choose చేయవచ్చు.",
      },
      {
        q: "Threading Art gifting కి suitable గా ఉంటుందా?",
        a: "చాలా suitable! Wedding gifts, anniversary gifts, housewarming gifts కోసం చాలా మంది choose చేస్తారు. Wall decor గా కూడా చాలా beautiful గా కనిపిస్తుంది.",
      },
    ],
  },
  {
    category: "📸 Photography & Videography",
    items: [
      {
        q: "Candid Videography అంటే ఏమిటి?",
        a: "Candid videography అనేది wedding కి cinematic video లాంటిది. Couple, relatives మరియు crowd యొక్క real emotions capture చేస్తారు. సాధారణంగా 5 mins మాత్రమే ఉంటుంది — చూడడానికి చాలా easy గా ఉంటుంది.",
      },
      {
        q: "Weddings మాత్రమే shoot చేస్తారా?",
        a: "కాదు! Wedding photography లో specialize అయినప్పటికీ, product shoots మరియు conceptual photography కూడా చేస్తాం.",
      },
      {
        q: "Chennai లో మాత్రమే shoots చేస్తారా?",
        a: "కాదు! మేము outstation weddings కూడా చేస్తాం. మా annual weddings లో దాదాపు 70% Chennai బయట ఉంటాయి.",
      },
    ],
  },
];

export default function Faqs({ coupleName = "Priya & Arjun" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggle = (key) => setOpenIndex(openIndex === key ? null : key);

  const handleContact = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/917997548544", "_blank");
  };

  return (
    <div className="faq-page">
      <div className="faq-bg-circle faq-bg-circle--top" />
      <div className="faq-bg-circle faq-bg-circle--bottom" />

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <p className="faq-couple-name">✦ {coupleName} ✦</p>
          <h1 className="faq-title">FAQ's</h1>
          <div className="faq-divider">
            <span className="faq-divider__leaf">🌿</span>
            <span className="faq-divider__line" />
            <span className="faq-divider__leaf">🌿</span>
          </div>
          <p className="faq-subtitle">
            మీకు తరచుగా వచ్చే questions కి మా answers ఇక్కడ చూడండి
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, catIdx) => (
          <div key={catIdx} className="faq-category">
            <h2 className="faq-category__title">{category.category}</h2>
            <div className="faq-list">
              {category.items.map((item, itemIdx) => {
                const key = `${catIdx}-${itemIdx}`;
                const isOpen = openIndex === key;
                return (
                  <div
                    key={key}
                    className={`faq-item${isOpen ? " faq-item--open" : ""}`}
                  >
                    <button className="faq-question" onClick={() => toggle(key)}>
                      <span className="faq-question__text">{item.q}</span>
                      <span
                        className={`faq-question__icon${
                          isOpen ? " faq-question__icon--open" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <div className="faq-answer__bar" />
                        <p className="faq-answer__text">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="faq-footer">
          <p className="faq-footer__text">
            మరిన్ని questions ఉంటే మాతో contact చేయండి 💛
          </p>
          <button onClick={handleContact} className="faq-footer__btn">
            📩 Contact Us
          </button>
        </div>
      </div>

      {/* ── Stylish Contact Modal ── */}
      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className="modal-close" onClick={handleClose}>✕</button>

            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-icon">💬</div>
              <h2 className="modal-title">మాతో Contact చేయండి</h2>
              <p className="modal-subtitle">
                మేము మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాం!
              </p>
            </div>

            <div className="modal-divider" />

            {/* Contact Options */}
            <div className="modal-options">
              <button className="modal-option modal-option--whatsapp" onClick={handleWhatsApp}>
                <span className="modal-option__icon">💚</span>
                <div className="modal-option__info">
                  <span className="modal-option__label">WhatsApp చేయండి</span>
                  <span className="modal-option__desc">Quick reply గారంటీ!</span>
                </div>
                <span className="modal-option__arrow">→</span>
              </button>

              <a
                className="modal-option modal-option--phone"
                href="tel:+919999999999"
              >
                <span className="modal-option__icon">📞</span>
                <div className="modal-option__info">
                  <span className="modal-option__label">Call చేయండి</span>
                  <span className="modal-option__desc">917997548544</span>
                </div>
                <span className="modal-option__arrow">→</span>
              </a>

              <a
                className="modal-option modal-option--email"
                href="mailto:hello@studio.com"
              >
                <span className="modal-option__icon">✉️</span>
                <div className="modal-option__info">
                  <span className="modal-option__label">Email పంపండి</span>
                  <span className="modal-option__desc">tarunsai04062002@gmail.com.com</span>
                </div>
                <span className="modal-option__arrow">→</span>
              </a>
            </div>

            <p className="modal-note">
              🕐 సాధారణంగా 1 గంటలో reply చేస్తాం
            </p>
          </div>
        </div>
      )}
    </div>
  );
}