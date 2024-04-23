"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PopoutComponent from "./PopoutComponent";

const profile = "/MyProfile2__1_-removebg-preview.png";
const projectImage = "/wallhaven-nm2e5m.jpg"

const Content = () => {
  return (
    <div id="next-component" className="content bg-white p-20">
      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="photo-profile flex justify-center">
          <PopoutComponent>
            <Image width={400} height={400} src={profile} alt="photo profile" />
          </PopoutComponent>
        </div>
        <div className="profile-description lg:pt-40">
          <p className="pt-0 lg:mt-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
            libero qui vel provident. Maiores porro consectetur magni, eveniet
            saepe, eos inventore, laudantium temporibus delectus similique
            facere nostrum in expedita!
          </p>
        </div>
      </div>
      <PopoutComponent>
        <div className="projects-container p-10 pb-40">
          <div className="projects-content-header flex justify-center items-center p-10">
            <h1 className="text-2xl">Projects</h1>
          </div>
          <hr />
          <div className="projects grid grid-cols-1 lg:grid-cols-3 lg:p-10">
            <div className="flex justify-center">
              <Image
                width={300}
                height={300}
                src={projectImage}
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <Image
                width={300}
                height={300}
                src={projectImage}
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <Image
                width={300}
                height={300}
                src={projectImage}
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="flex justify-center items-center">
            <div className="p-2 bg-slate-100 w-20 text-center absolute">
              <Link href="/work">More</Link>
            </div>
          </div>
        </div>
      </PopoutComponent>
    </div>
  );
};

export default Content;
