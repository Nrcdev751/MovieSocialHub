import Sidemenu from "../component/Sidemenu.jsx";
import Navbar from "../component/Navbar.jsx";
import Trending from "../component/Trending.jsx";
import Post from "../component/Post/Post.jsx";

import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Link from 'next/link'
import profile from '../src/profile.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="content">
      <div className=" drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-red-200/25">
              <div className="main-menu">
              <nav className="bg-white p-5 border-2 fixed z-10 w-full ">
                <div className="nav-menu flex justify-between max-w-screen-xl  ">
                  <div className="nav-logo flex items-center text-lg">
                      <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                        <GiHamburgerMenu />
                      </label>
                      <IoChatbubbleEllipses/>
                      <p className="font-bold ms-2 hidden md:block">Profile</p>
                  </div>
                  <div className="top-menu bg-slate-100 fixed md:static flex justify-center rounded-lg  border-2 border-slate-200 hidden z-20 md:block  p-1 ">
                      <Link href="/"><small className=" text-slate-400 text-sm rounded-md duration-200 hover:bg-white hover:text-dark hover:text-sm hover:shadow-sm hover:rounded-md  p-1 px-4">Feed</small></Link>  
                      <Link href="/chat"><small className="text-slate-400 text-sm rounded-md duration-200 hover:bg-white hover:text-dark hover:text-sm hover:shadow-sm hover:rounded-md  p-1 px-4">Chat</small></Link>  
                      <Link href="/profile"><small className="bg-white text-sm shadow-sm rounded-md p-1 px-4 font-bold">Profile</small></Link>
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
                <div className="hidden md:block">
                  <br /><br /><br /><br />
                </div>
                <div className="max-w-screen-xl ">
                  <div className="grid md:grid-cols-3 lg:grid-cols-12 gap-20">
                    
                    <div className="hidden lg:block lg:col-span-3"></div>
                          <div className="md:p-4 md:col-span-2 lg:col-span-6">
                              <div className="posting p-4 bg-white shadow-md rounded-md">
                        <div className="profile justify-center flex items-center flex-col" >
                              <Image className="w-20 h-20 rounded-full" src={profile} alt="" />
                              <p className="mt-4 font-bold">Narongchai</p>
                              <p>&apos;&apos; Never Stop Learning &apos;&apos;</p>
                        </div>
                        <div className="profile-status flex justify-center my-4 items-center">
                          <small className="mx-2">2 Post</small>
                          <small className="mx-2">5 Follower</small>
                          <small className="mx-2">5 Followes</small>
                        </div>
                        <div className="posting-interaction flex justify-between mt-4 items-center">
                            
                        </div>
                          </div>
                          <Post />
                          <Post />
                          <Post />
                          <Post />
                      </div>
                    {/* another tab */}
                    <div className="p-4 md:col-span-1 lg:col-span-3 hidden md:block ">
                      <Trending/>
                    </div>
                  </div>
                </div>
              </div>
          </div> 
          <div className="drawer-side shadow-md">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
              <Sidemenu/>
            </ul>
          </div>
      </div>
    </section>
  );
}
