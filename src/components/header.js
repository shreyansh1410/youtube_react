import React from 'react'
import hamburger from "../assets/hamburger.svg";
import logo from "../assets/youtube_logo.png";
import userIcon from "../assets/user_icon.png";
import searchIcon from "../assets/search_icon.png";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const toggleMenuHandler =() => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2'>
      <div className='flex col-span-1'>
        <img alt='menu' src={hamburger} className='h-6 mx-2 my-0.5 cursor-pointer' onClick={toggleMenuHandler} />
        <a href='/'><img alt='logo' src={logo} className='h-7 mx-2 cursor-pointer' /></a>
      </div>
      <div className='grid grid-flow-col col-span-10 ml-40 -m-2'>
        <div><input type='text' placeholder='Search' className='rounded-l-full p-2 px-4 col-span-8 w-full h-10 border border-gray-300'/></div>
        <div>
          <button className='bg-gray-200 text-white rounded-r-full p-2 px-4 col-span-4 w-1/6'>
            <img alt='search-icon' src={searchIcon} className='h-6 brightness-50' />
          </button>
        </div>
      </div>
      <div className='col-span-1'>
        <img alt='user-icon' src={userIcon} className='h-8'></img>
      </div>
    </div>
  )
}

export default Header;
