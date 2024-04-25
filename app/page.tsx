"use client"
import { useEffect, useState } from "react"

import Banner from "./components/Banner"
import Navbar from "./components/Navbar"


export default function Home() {
  return (
    <div className="text-xs md:text-sm lg:text-base">
      <Navbar />
      <Banner />
    </div>
  );
}


const Footer = () => {
  return (
    <div className="bg-slate-200 text-black p-7 h-[30vh] bottom-0 w-full">
      <div className="footer-container">
        <h1>This is footer</h1>
      </div>
    </div>
  )
}