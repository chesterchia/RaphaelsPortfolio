import './css/VideoGrid.css'
import Video from "./Video"

export default function VideoGrid({ videos, isFirstLoad }) {
    return (
        <div className="video-grid">
            {videos.map((video) => (
                <Video
                    key={`${isFirstLoad ? 'first-load' : ''}-${video}`}
                    url={video}
                />
            ))}
        </div>
    );
}