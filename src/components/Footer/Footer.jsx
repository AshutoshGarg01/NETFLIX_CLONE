import React from 'react'
import './Footer.css'
import youtube_icons from '../../assets/youtube_icon.png'
import facebook_icons from '../../assets/facebook_icon.png'
import twitter_icons from '../../assets/twitter_icon.png'
import instagram_icons from '../../assets/instagram_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icons} alt="" />
        <img src={instagram_icons} alt="" />
        <img src={twitter_icons} alt="" />
        <img src={youtube_icons} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
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
      <p className='copyright-text'>
      © 1997-2024 Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer
