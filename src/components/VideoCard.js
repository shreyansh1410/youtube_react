import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoCard = (video) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(video);
  const customClass = !isMenuOpen ? "w-[390px] mx-3 my-5" : "w-[350px] mx-3 my-5";
  const isMaxResAvailable = video?.video?.snippet?.thumbnails?.maxres;
  const views = video?.video?.statistics?.viewCount;
  const formatViews = (views) => {
    if (views >= 1e9) {
      // Convert to billion
      return `${(views / 1e9).toFixed(1)}B`;
    } else if (views >= 1e6) {
      // Convert to million
      return `${(views / 1e6).toFixed(1)}M`;
    } else if (views >= 1e3) {
      // Convert to thousand
      return `${(views / 1e3).toFixed(1)}K`;
    } else {
      return views.toString();
    }
  };

  const calculateVideoAge = () => {
    if (!video) {
      return 'Loading...';
    }

    const publishedDate = new Date(video.video.snippet.publishedAt);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - publishedDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365;

    if (ageInYears >= 1) {
      return `${Math.floor(ageInYears)} years ago`;
    } else if (ageInDays >= 1) {
      return `${Math.floor(ageInDays)} days ago`;
    } else if (ageInHours >= 1) {
      return `${Math.floor(ageInHours)} hours ago`;
    } else if (ageInMinutes >= 1) {
      return `${Math.floor(ageInMinutes)} minutes ago`;
    } else {
      return 'Just now';
    }
  };

  return (
    <div className={customClass}>
      <Link to={"/watch?v=" + video.video.id}>
        {isMaxResAvailable ? <img
          alt='thumbnail'
          src={video?.video?.snippet?.thumbnails?.maxres?.url}
          className='rounded-2xl cursor-pointer'>
        </img> : <img
          alt='thumbnail'
          src={video?.video?.snippet?.thumbnails?.standard?.url}
          className='rounded-2xl cursor-pointer w-[400px] h-[200px]'>
        </img>}
      </Link>
      <div className='font-medium max-w-xs'>{video?.video?.snippet?.title}</div>
      <div className='text-sm max-w-xs'>{video?.video?.snippet?.channelTitle}</div>
      <div className='text-sm max-w-xs'>{`${formatViews(views)} views`}</div>
      <div className='text-sm max-w-xs'>{calculateVideoAge()}</div>
    </div>
  )
}

export default VideoCard
