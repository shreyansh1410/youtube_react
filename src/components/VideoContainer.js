import React, { useEffect, useState } from 'react'
import { MOST_POPULAR_API } from './../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
      const data = await fetch(MOST_POPULAR_API);
      const json = await data.json();
      setVideos(json.items);
  }

  return (
    <div className='ml-4 flex flex-wrap'>
    {videos.map((video, index) => <VideoCard key={video.id} video={videos[index]}/>)}      
    </div>
  )
}

export default VideoContainer;
