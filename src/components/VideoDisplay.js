import './css/VideoDisplay.css'
import { useEffect, useState } from 'react'
import { fetchCategories, fetchAllVideos, fetchVideosByCategory } from '../utility/firebaseutil'
import Sidebar from './Sidebar'
import VideoGrid from './VideoGrid'

export default function VideoDisplay() {
    const [categories, setCategories] = useState([])
    const [videos, setVideos] = useState([])
    const [isFirstLoad, setIsFirstLoad] = useState(true)

    useEffect(() => {
        fetchCategories().then(setCategories)
        fetchAllVideos().then(setVideos)
    }, []);

    const handleSelectCategory = (category) => {
        fetchVideosByCategory(category).then(setVideos)
        setIsFirstLoad(false)
    };

    return (
        <div className="video-display">
            <Sidebar categories={categories} onSelectCategory={handleSelectCategory} />
            <VideoGrid videos={videos} isFirstLoad={isFirstLoad} />
        </div>
    );
}