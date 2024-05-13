import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";

export default function Navbar(){
    return(
        <nav className="bg-white p-5 border-2 z-10 w-full md:fixed ">
                <div className="nav-menu flex justify-between max-w-screen-xl  ">
                  <div className="nav-logo flex items-center text-lg">
                      <label htmlFor="my-drawer-2" className="drawer-button me-5 lg:hidden">
                        <GiHamburgerMenu />
                      </label>
                      <FaHome/>
                      <p className="font-bold ms-2 hidden md:block">Home</p>
                  </div>
                  <div className="top-menu bg-slate-300/25  flex justify-center rounded-lg  border-2 border-slate-200  p-1 ">
                      <small className="bg-white text-sm shadow-sm rounded-md p-1 px-4 font-bold">Feed</small>
                      <small className="text-slate-400 text-sm rounded-md p-1 px-4">Chat</small>
                      <small className="text-slate-400 text-sm rounded-md p-1 px-4">Profile</small>
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
    )
}