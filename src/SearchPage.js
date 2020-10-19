import  TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined';
import React from 'react';
import './SearchPage.css';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPage__filter" >
                <TuneOutlinedIcon/>
                <h2> FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
            image="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
            channel="Joseph Muema"
            verified
            subs="660k"
            noOfVideos={380}
            description="How to get rich in 1 Month. Generate visually rich links from the URL of a webpage. In this tutorial, you’ll transform Open Graph metadata into image thumbnail previews for an iOS app."
            
            />
            <hr/>
            <VideoRow
            views="1.8M"
            subs="700K"
            description="Generate visually rich links from the URL of a webpage. In this tutorial, you’ll transform Open Graph metadata into image thumbnail previews for an iOS app."
            timestamp="30 Seconds ago"
            channel="Joseph Muema"
            title="GET RICH QUICK WITHIN A MONTH"
            image="https://i.ytimg.com/vi/3RdHWtzgZiI/maxresdefault.jpg "
            
            />
                 <VideoRow
            views="2.5M"
            subs="900K"
            description="Generate visually rich links from the URL of a webpage. In this tutorial, you’ll transform Open Graph metadata into image thumbnail previews for an iOS app."
            timestamp="50 Seconds ago"
            channel="Joseph Muema"
            title="GET RICH QUICK WITHIN A 2 WEEK"
            image="https://i.ytimg.com/vi/NLG9tmgvGY8/maxresdefault.jpg"
            
            />
                         <VideoRow
            views="2.5M"
            subs="900K"
            description="Generate visually rich links from the URL of a webpage. In this tutorial, you’ll transform Open Graph metadata into image thumbnail previews for an iOS app."
            timestamp="50 Seconds ago"
            channel="Joseph Muema"
            title="GET RICH QUICK WITHIN A WEEK"
            image="https://i.pinimg.com/originals/77/30/7d/77307d8d803af259dc6e5994405160e6.jpg"
            
            />
                         <VideoRow
            views="2.5M"
            subs="900K"
            description="Generate visually rich links from the URL of a webpage. In this tutorial, you’ll transform Open Graph metadata into image thumbnail previews for an iOS app."
            timestamp="50 Seconds ago"
            channel="Joseph Muema"
            title="GET RICH QUICK WITHIN A WEEK"
            image="https://i.ytimg.com/vi/NxmTEJSmEn8/maxresdefault.jpg"
            
            />
                         <VideoRow
            views="2.5M"
            subs="900K"
            description="Generate visually rich links from the URL of a webpage. In this tutorial, you’ll transform Open Graph metadata into image thumbnail previews for an iOS app."
            timestamp="50 Seconds ago"
            channel="Joseph Muema"
            title="GET RICH QUICK WITHIN A WEEK"
            image="https://i.ytimg.com/vi/td-coWlfs6E/maxresdefault.jpg"
            
            />


            
        </div>
    )
}

export default SearchPage
