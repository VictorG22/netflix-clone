import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={ hero_banner } alt="" className='banner__img' />
        <div className="hero__caption">
          <img src={ hero_title } alt="" className='caption__img'/>
          <p className='caption__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, modi impedit dolore totam minus dignissimos magni ducimus odio itaque placeat quod reiciendis maxime, odit necessitatibus consectetur fuga blanditiis amet sunt.</p>
          <div className="hero__btns">
            <button className='btn'><FontAwesomeIcon className="play__btn" icon="play" />Play</button>
            <button className='btn dark__btn'><FontAwesomeIcon className="info__btn" icon="info-circle" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={'Blockbuster Movies'} category={'top_rated'} />
      <TitleCards title={'Only on Netflix'} category={'popular'} />
      <TitleCards title={'Upcoming'} category={'upcoming'} />
      <TitleCards title={'Top Picks For You'} category={'now_playing'} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
