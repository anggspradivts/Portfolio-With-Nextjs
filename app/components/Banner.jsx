"use client";
import React from "react";
import PopoutComponent from "./PopoutComponent";
import Image from "next/image";
import WindowWIdth from "../utils/WindowWIdth";

const downArrowImage = "/icons/down-arrow.png";
const photoProfile = "/images/profile-image.png";

const Banner = () => {
  const windowWidth = WindowWIdth()
  return (
    <PopoutComponent>
      <div className="banner-container grid grid-cols-1 lg:grid-cols-2 gap-10 bg-slate-800 text-white h-screen lg:py-20">
        {windowWidth > 1000 ? (
          <div className="banner-header flex justify-center lg:justify-end items-center text-center">
            <Image
              src={photoProfile}
              height={400}
              width={400}
              alt="down arrow"
            />
          </div>
        ) : (
          null
        )}
        <div className="banner-text grid grid-cols-1 gap-10">
          <div className="flex justify-center lg:justify-start items-end">
            <h1 className="text-[6vw]">Hello</h1>
          </div>
          <div className="flex justify-center lg:justify-start">
            <h1 className="text-[2vw]">I'm Angga Pradivta, Fullstack Web Developer</h1>
          </div>
        </div>
      </div>
    </PopoutComponent>
  );
};

export default Banner;
