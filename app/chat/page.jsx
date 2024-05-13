import Sidemenu from "../component/Sidemenu.jsx";
import Navbar from "../component/Navbar.jsx";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Link from 'next/link'

export default function Chat() {
  return (
    <section className="content">
      <div className=" drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-red-200/25">
              <div className="main-menu">
              <nav className="bg-white p-5 border-2 z-10 w-full ">
                <div className="nav-menu flex justify-between max-w-screen-xl  ">
                  <div className="nav-logo flex items-center text-lg">
                      <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                        <GiHamburgerMenu />
                      </label>
                      <FaHome/>
                      <p className="font-bold ms-2 hidden md:block">Home</p>
                  </div>
                  <div className="top-menu bg-slate-100 fixed md:static flex justify-center rounded-lg  border-2 border-slate-200 hidden z-20 md:block  p-1 ">
                      <Link href="/"><small className=" text-slate-400 text-sm rounded-md duration-200 hover:bg-white hover:text-dark hover:text-sm hover:shadow-sm hover:rounded-md  p-1 px-4">Feed</small></Link>  
                      <Link href="/chat"><small className="bg-white text-sm shadow-sm rounded-md p-1 px-4 font-bold">Chat</small></Link>
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
                        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
                
                <div className="max-w-screen-xl ">
                  <div className="grid md:grid-cols-12">
                    <div className="col-span-9">
                      <div className="p-2 bg-blue-500"></div>
                    </div>
                    {/* another tab */}
                    <div className="md:col-span-3 hidden md:block ">
                      <div className="p-2 bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div> 
          <div className="drawer-side shadow-md">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
            <div className="sub-menu ">
                  <div className="topic  flex justify-between items-center">
                      <p>My community</p>
                      <small className="text-red-600 bg-red-300/25 rounded-full p-1">29</small>
                  </div>
                  <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                      <img className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      <div className="comm-text flex flex-col ms-2">
                          <p >Marvel fan community</p>
                          <p className="text-slate-400 text-sm">40 members</p>
                      </div>
                  </div>
                  <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                      <img className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      <div className="comm-text flex flex-col ms-2">
                          <p >Moviereview</p>
                          <p className="text-slate-400 text-sm">25 members</p>
                      </div>
                  </div>
                  <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                      <img className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      <div className="comm-text flex flex-col ms-2">
                          <p >Moviereview</p>
                          <p className="text-slate-400 text-sm">25 members</p>
                      </div>
                  </div>
                  <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                      <img className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      <div className="comm-text flex flex-col ms-2">
                          <p >Moviereview</p>
                          <p className="text-slate-400 text-sm">25 members</p>
                      </div>
                  </div>
              </div>
            </ul>
          </div>
      </div>
    </section>
  );
}
