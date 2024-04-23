'use client'
import React from 'react'
import PopoutComponent from "./PopoutComponent"
import Image from "next/image"
import { useRouter } from "next/router"

const downArrowImage = "/icons/down-arrow.png"

const Banner = () => {
  return (
    <PopoutComponent>

    <div className="banner-container grid grid-cols-1 text-white bg-transparent h-screen mt-20">
      <div className="banner-header flex justify-center items-end text-center">
        <h1 className="text-8xl">Hello</h1>
      </div>
      <div className="banner-text flex justify-center items-start text-center">
        <h1 className='text-2xl'>I'm Angga Pradivta, Fullstack Web Developer</h1>
      </div>
      <div className='flex justify-center items-center h-20 ' >
        <Image id='scroll-trigger' src={downArrowImage} height={100} width={100} alt='down arrow'/>
      </div>
    </div>
    </PopoutComponent>
  )
}

export default Banner