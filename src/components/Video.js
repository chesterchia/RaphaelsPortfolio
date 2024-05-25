import './css/Video.css'

import { useState, useEffect, useRef } from 'react'

export default function Video({ url }) {
    const getRandomSize = () => {
        const min = 0.7
        const max = 1
        return Math.random() * (max - min) + min
    }

    const [baseSize, setBaseSize] = useState(1)
    const [scale, setScale] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false)

    const videoRef = useRef()

    useEffect(() => {
        const size = getRandomSize()
        setBaseSize(size)
        setScale(size)

        const currentVideoRef = videoRef.current

        return () => {
            if (currentVideoRef) {
                currentVideoRef.classList.add('fade-out')
            }
        }
    }, [])

    const handleMouseEnter = () => {
        if (!isPlaying) {
            setScale(baseSize * 1.1)
        }
    }

    const handleMouseLeave = () => {
        if (!isPlaying) {
            setScale(baseSize)
        }
    }

    const handlePlay = () => {
        setIsPlaying(true)
    }

    const handlePause = () => {
        setIsPlaying(false)
        setScale(baseSize)
    }

    return (
        <video
            src={url}
            className="video"
            controls
            width="100%"
            height="100%"
            style={{ transform: `scale(${scale})` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPlay={handlePlay}
            onPause={handlePause}
        />
    );
}