import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const customClass = isMenuOpen ? "mt-2 m-6 max-w-6xl" : "mt-2 m-6 max-w-7xl";

  return (
    <div className={customClass}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer;
