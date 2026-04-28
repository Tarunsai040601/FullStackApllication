import React from 'react'
import './Sticker.css'
import logo from '../../assets/images/titlepic.jpg'

const Sticker = () => {
  return (
    <div className="sticker-wrapper">
      <div className="sticker-card">

        {/* Decorative corner petals */}
        <span className="sticker-petal sticker-petal--tl">✿</span>
        <span className="sticker-petal sticker-petal--tr">✿</span>
        <span className="sticker-petal sticker-petal--bl">✿</span>
        <span className="sticker-petal sticker-petal--br">✿</span>

        {/* Logo */}
        <div className="sticker-logo-wrap">
          <img src={logo} alt="Thread Art Portrait by Couple" className="sticker-logo" />
        </div>

        {/* Divider */}
        <div className="sticker-divider">
          <span className="sticker-divider__line" />
          <span className="sticker-divider__gem">❧</span>
          <span className="sticker-divider__line" />
        </div>

        {/* Info */}
        <div className="sticker-info">
          <p className="sticker-info__tagline">Handcrafted with Love &amp; Thread</p>
          <h2 className="sticker-info__name">Thread Art Portrait</h2>
          <p className="sticker-info__sub">by <em>Couple</em></p>

          <div className="sticker-tags">
            <span className="sticker-tag">🎁 Customised Gifts</span>
            <span className="sticker-tag">🖼️ Photo Frames</span>
            <span className="sticker-tag">🧵 Threading Arts</span>
          </div>

          <div className="sticker-contact">
            <span className="sticker-contact__item">📸 @threadartbycouple</span>
            <span className="sticker-contact__dot">·</span>
            <span className="sticker-contact__item">💚 WhatsApp Us</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sticker