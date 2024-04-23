'use client'
import Banner from "./components/Banner"
import Content from "./components/Content"
import Contact from "./components/Contact"
import Link from "next/link"
import WindowWidth from "./components/utils/WindowWIdth"

export default function Home() {
  return (
    <div className="text-xs md:text-sm lg:text-base">
      <div className="background-image"></div>
      <Navbar />
      <Banner />
      <Content />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}


const Navbar = () => {
  const windowWidth = WindowWidth()
  return (
    <div>
      {windowWidth > 1000 ? (
        <div className="bg-slate-200 text-black p-7 fixed top-0 z-10 w-full text-xl">
        <div className="nav-container flex justify-between">
          <div className="nav-logo">
            <h1>Logo</h1>
          </div>
          <div className="nav-route flex gap-7">
            <div><Link href="/about">About</Link></div>
            <div><Link href="/contact">Contact</Link></div>
            <div><Link href="/project">Project</Link></div>
          </div>
        </div>
      </div>
      ) : (
        <div className="bg-slate-200 text-black p-7 fixed bottom-0 z-10 w-full">
          <div>
            
          </div>
        </div>
      )}
    </div>
    
  )
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