import './css/Hero.css'
import { useEffect, useState } from 'react'
import { fetchBannerVideo } from '../utility/firebaseutil'

import heroImage from '../assets/images/hero.jpg'

export default function Hero() {
    const [videoUrl, setVideoUrl] = useState(null)

    useEffect(() => {
        fetchBannerVideo().then(setVideoUrl)
    }, [])
    return (
        <div className="hero">
            <video className="hero-video" src={videoUrl} autoPlay loop muted />
            <div className="hero-overlay"></div>
            <img className="hero-image" src={heroImage} alt="" />
            <div className="hero-name">Raphael Lim</div>
        </div>
    )
}