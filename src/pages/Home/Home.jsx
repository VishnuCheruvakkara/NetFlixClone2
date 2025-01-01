import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../assets/BannerImage.jpg'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero'>
                <img src={HeroBanner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <h2>Unlimited movies, TV shows and more</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae amet obcaecati nisi eaque consequatur nobis autem ipsa, culpa doloribus esse</p>
                    <div className='hero-btns'>
                        <button className='btn'><FaPlay />Play</button>
                        <button className='btn dark-btn'><IoMdInformationCircleOutline className='info' />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} />
                <TitleCards title={"Only on Netflix"} />
                <TitleCards title={"Upcomming"} />
                <TitleCards title={"Topics for you"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home