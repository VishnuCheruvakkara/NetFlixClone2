import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <FaFacebook className='icons'/>
        <LuInstagram className='icons'/>
        <FaTwitter className='icons'/>
        <FaYoutube className='icons'/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Media Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Netflix, Inc. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
