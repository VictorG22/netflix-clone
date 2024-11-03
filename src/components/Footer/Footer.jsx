import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__icons">
      <FontAwesomeIcon className='footer__icon' icon="fa-brands fa-youtube" />
      <FontAwesomeIcon className='footer__icon' icon="fa-brands fa-x-twitter" />
      <FontAwesomeIcon className='footer__icon' icon="fa-brands fa-instagram" />
      <FontAwesomeIcon className='footer__icon' icon="fa-brands fa-facebook" />
      </div>
      <ul className='footer__links'>
        <li className='footer__link'>Audio Description</li>
        <li className='footer__link'>Help Center</li>
        <li className='footer__link'>Gift Cards</li>
        <li className='footer__link'>Media Center</li>
        <li className='footer__link'>Investor Relaions</li>
        <li className='footer__link'>Jobs</li>
        <li className='footer__link'>Terms of Use</li>
        <li className='footer__link'>Privacy</li>
        <li className='footer__link'>Legal Notices</li>
        <li className='footer__link'>Cookie Preferences</li>
        <li className='footer__link'>Corporate Information</li>
        <li className='footer__link'>Contact Us</li>
      </ul>
      <p className="copyright__text">&copy; 1997-2023 Netflix, Inc.</p>
      
    </div>
  )
}

export default Footer
