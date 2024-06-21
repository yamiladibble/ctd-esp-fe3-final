import React  from 'react';
import '../index.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer >
       <button onClick={scrollToTop} className="back-to-top-button">Volver al inicio</button>

        <p>Powered by</p>
        <img src={`/images/DH.png`} alt='DH-logo' />
        <div className='footer-icon'>
          <img src={`/images/ico-facebook.png`} alt="Facebook" className='footer-icon' />
          <img src={`/images/ico-instagram.png`} alt="Instagram" className='footer-icon'/>
          <img src={`/images/ico-tiktok.png`} alt="TikTok" className='footer-icon'/>
          <img src={`/images/ico-whatsapp.png`} alt="WhatsApp" className='footer-icon'/>


        </div>
    </footer>
  )
}

export default Footer
