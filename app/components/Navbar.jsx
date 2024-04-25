import WindowWidth from "../utils/WindowWIdth"
import Link from "next/link"
import Image from "next/image"

import homeIcon from "/public/icons/home.png"
import aboutIcon from "/public/icons/info.png"
import contactIcon from "/public/icons/envelope.png"
import workIcon from "/public/icons/briefcase.png"

const Navbar = () => {
  const windowWidth = WindowWidth()

  // if(window.location.pathname === '/about') {
  //   const element = document.getElementById('about-navlink');
  //   if (element) {
  //     element.classList.add("active");
  //   }
  // }

  return (
    <div>
      {windowWidth > 800 ? (
        <div className="bg-slate-800 text-white p-7 fixed top-0 z-10 w-full text-xl">
        <div className="nav-container flex justify-between">
          <div className="nav-logo">
            <div><Link href="/">Logo</Link></div>
          </div>
          <div className="nav-route flex gap-7">
            <div><Link href="/about">About</Link></div>
            <div><Link href="/contact">Contact</Link></div>
            <div><Link href="/project">Project</Link></div>
          </div>
        </div>
      </div>
      ) : (
        <div className="bg-slate-800 text-white p-1 fixed bottom-0 z-10 w-full">
          <div className="grid grid-cols-4">
            <div id="home-navlink" className="navbar-icon-image">
              <Link href="/">
                <Image src={homeIcon} height={50} width={50} alt="home icon" />
              </Link>
            </div>
            <div id="about-navlink" className="navbar-icon-image">
              <Link href="/about">
                <Image src={aboutIcon} height={50} width={50} alt="home icon" />
              </Link>
            </div>
            <div id="contact-navlink" className="navbar-icon-image">
              <Link href="/contact">
                <Image src={contactIcon} height={50} width={50} alt="home icon" />
              </Link>
            </div>
            <div id="work-navlink" className="navbar-icon-image">
              <Link href="/work">
                <Image src={workIcon} height={50} width={50} alt="home icon" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar