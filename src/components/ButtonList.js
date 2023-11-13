import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll max-w-full custom-scrollbar'>
      <Button name={"All"}/>
      <Button name={"Live"}/>
      <Button name={"Sports"}/>
      <Button name={"News"}/>
      <Button name={"Music"}/>
      <Button name={"Computer Programming"}/>
      <Button name={"Chill Out Music"}/>
      <Button name={"Bollywood Music"}/>
      <Button name={"Bollywood Music"}/>
      <Button name={"Bollywood Music"}/>
      <Button name={"Bollywood Music"}/>
      <Button name={"Bollywood Music"}/>
    </div>
  )
}

export default ButtonList
