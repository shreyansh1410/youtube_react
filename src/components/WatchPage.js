import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    const [serchParams] = useSearchParams();
    console.log(serchParams.get("v"));
    return (
        <div className='m-4 mx-6'>
            <iframe 
            width="900" 
            height="500" 
            src={"https://www.youtube.com/embed/"+serchParams.get("v")+"?si=5DRjCGy_a-Dbpxks&autoplay=1&loop=1&amp;"} title="YouTube video player" 
            allow="accelerometer; autoplay=; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className='rounded-lg'>
            </iframe>
        </div>
    )
}

export default WatchPage
