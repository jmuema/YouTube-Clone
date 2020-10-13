import React from 'react';
import './RecommendedVideos.css';
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos" >
            <h2> this are RecommendedVideos</h2>
            <VideoCard title="Become a developer in 10mins "
            views="2.3M views"
            timestamp="3 days ago"
            channelImage=""
            
            />
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>

        </div>
    )
}

export default RecommendedVideos
