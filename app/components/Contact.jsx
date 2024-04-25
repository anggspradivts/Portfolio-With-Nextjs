"use client";
import React from "react";
import PopoutComponent from "./PopoutComponent";
import Image from "next/image"

const Contact = () => {
  const iconGit = "/icons/github.png"
  const iconIg = "/icons/instagram.png"
  const iconTwit = "/icons/twitter.png"
  return (
    <PopoutComponent>
      <div className="contact-container w-full h-[60vh] flex justify-center">
        <div className="contact bg-slate-200 text-black grid grid-cols-1 lg:grid-cols-2 h-[70vh] w-[60vw] absolute -top-40 p-5 lg:p-10">
          <div className="contact-text">
            <h1>This is contact description</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              optio quidem numquam cumque omnis et animi ex distinctio aliquid
              pariatur, ea ab tenetur! Ipsam minus vitae, eligendi nulla quos
              at!
            </p>
          </div>
          <div className="contact-form">
            <h1>This is form</h1>
          </div>
          <div className="socialmedia flex items-center gap-4 col-span-full">
            <Image width={50} height={50} className="h-5 md:h-7 lg:h-10" src={iconGit} alt="" />
            <Image width={50} height={50} className="h-5 md:h-7 lg:h-10" src={iconIg} alt="" />
            <Image width={50} height={50} className="h-5 md:h-7 lg:h-10" src={iconTwit} alt="" />
          </div>
        </div>
      </div>
    </PopoutComponent>
  );
};

export default Contact;
