import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import profile from '../src/profile.jpg'
import Image from 'next/image'

import Link from 'next/link'

export default function Navbar(){
    return(
      <>
        <nav className="bg-white p-5 border-2 z-10 w-full md:fixed ">
                <div className="nav-menu flex justify-between max-w-screen-xl  ">
                  <div className="nav-logo flex items-center text-lg">
                      <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                        <GiHamburgerMenu />
                      </label>
                      <FaHome/>
                      <p className="font-bold ms-2 hidden md:block">Home</p>
                  </div>
                  <div className="top-menu bg-slate-100 fixed md:static flex justify-center rounded-lg  border-2 border-slate-200 hidden z-20 md:block  p-1 ">
                      <Link href="/"><small className="bg-white text-sm shadow-sm rounded-md p-1 px-4 font-bold">Feed</small></Link>
                      <Link href="/chat"><small className=" text-slate-400 text-sm rounded-md duration-200 hover:bg-white hover:text-dark hover:text-sm hover:shadow-sm hover:rounded-md  p-1 px-4">Chat</small></Link>  
                      <Link href="/profile"><small className="text-slate-400 text-sm rounded-md duration-200 hover:bg-white hover:text-dark hover:text-sm hover:shadow-sm hover:rounded-md  p-1 px-4">Profile</small></Link>  
                      <small className="text-slate-400 text-sm rounded-md p-1 px-4">Community</small>
                  </div>
                  <div className="nav-profile flex items-center">
                      <div className="menu-icon mx-1">
                        <div className="bg-white-600 border-2 border-slate-100 p-2 rounded-full cursor-pointer duration-100 hover:text-red-500/75 hover:animate-pulse">
                        <IoChatbubbleEllipses />
                        </div>
                      </div>
                      <div className="menu-icon mx-1">
                        <div className="bg-white-600 border-2 border-slate-100 p-2 rounded-full cursor-pointer duration-100 hover:text-red-500/75 hover:animate-pulse">
                          <FaBell/>
                        </div>
                      </div>
                      <p className="mx-4 hidden md:flex">Narongchai</p>
                      <div className="avatar w-10 h-10 relative">
                        <Image
                        className="w-10 h-10 rounded-full" 
                        src={profile} alt=""
                        />
                        <div className="bg-white flex items-center absolute w-4 h-4 rounded-full left-6 top-7  ">
                            <IoIosArrowDown className="text-sm" />
                        </div>
                      </div>
                  </div>
                </div>
              </nav>
                  <div className="mobile-menu bg-slate-100 bottom-0 md:hidden  flex justify-center  border-2 border-slate-200 ">
                        <div className="mobile-icon p-2 bg-white  flex flex-col items-center">
                          <FaHome />
                          <small className="text-sm shadow-sm rounded-md p-1 px-4 font-bold">Feed</small>
                        </div>
                        <div className="mobile-icon p-2   flex flex-col items-center">
                          <IoChatboxSharp />
                          <small className="text-sm shadow-sm rounded-md p-1 px-4 font-bold">Chat</small>
                        </div>
                        <div className="mobile-icon p-2   flex flex-col items-center">
                          <FaUser />
                          <small className="text-sm shadow-sm rounded-md p-1 px-4 font-bold">Profile</small>
                        </div>
                        <div className="mobile-icon p-2   flex flex-col items-center">
                          <FaUsers />
                          <small className="text-sm shadow-sm rounded-md p-1 px-4 font-bold">Community</small>
                        </div>

                    </div>
            
                  </>
              
    )
}