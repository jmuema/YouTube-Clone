import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoCard.css';

function VideoCard(props) {

    const { image, title, channel, views, timestamp, channelImage} = props


    return (
        <div className="videocard" >
            <img src={image} alt=""/>
            <div className="video__info" > 
            <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
            <div className="video__text" > 
            <h4>{title} </h4>
            <p>{channel} </p>
            <p> {views} .
            {timestamp} </p>

            </div>
            
            </div>
            
        </div>
    );
}

export default VideoCard