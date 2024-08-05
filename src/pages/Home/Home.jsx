import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/banner_1.jpg'
import hero_title from '../../assets/title_3.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner_img' />
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption_img' />
          <p>
            Welcome to Hawkins, Indiana, a small town with big
            secrets. Strange sightings. Government cover-ups.
            And a dark force that turns everything upside down.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Today's Top Picks for You"} category={"top_rated"}/>
        <TitleCards title={"New on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming Movies"} category={"upcoming"}/>
        <TitleCards title={"Casual Viewing"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home 
