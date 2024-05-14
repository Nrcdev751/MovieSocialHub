import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import Image from 'next/image'
export default function Sidemenu(){
    return(
        <>
        <h3 className="text-xl font-bold text-red-400">MovieSocialhub</h3>
        <label className="input input-bordered flex items-center gap-2 my-5">
            <input type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
            <div className="sub-menu my-5">
                <div className="p-4 cursor-pointer text-lg bg-slate-200/50 my-2 rounded-md flex items-center">
                    <FaHome className="text-red-400 " />
                    <h1 className="text-red-500 ms-2">Home</h1>
                </div>
                <div className="p-4 cursor-pointer text-lg duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaUsers />
                    <h1 className="text-slate-500 ms-2">Community</h1>
                </div>
                <div className="p-4 cursor-pointer text-lg duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaShoppingBasket />
                    <h1 className="text-slate-500 ms-2">Shop</h1>
                </div>
                <div className="p-4 cursor-pointer text-lg duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaCalendarAlt />
                    <h1 className="text-slate-500 ms-2">Events</h1>
                </div>
                <div className="p-4 cursor-pointer text-lg duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaNewspaper />
                    <h1 className="text-slate-500 ms-2">News</h1>
                </div>
            </div>
            <div className="sub-menu ">
                <div className="topic  flex justify-between items-center">
                    <p>My community</p>
                    <small className="text-red-600 bg-red-300/25 rounded-full p-1">29</small>
                </div>
                <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                    <Image width={1200} height={1200} className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="comm-text flex flex-col ms-2">
                        <p >Marvel fan community</p>
                        <p className="text-slate-400 text-sm">40 members</p>
                    </div>
                </div>
                <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                    <Image width={1200} height={1200} className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="comm-text flex flex-col ms-2">
                        <p >Moviereview</p>
                        <p className="text-slate-400 text-sm">25 members</p>
                    </div>
                </div>
                <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                    <Image width={1200} height={1200} className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="comm-text flex flex-col ms-2">
                        <p >Moviereview</p>
                        <p className="text-slate-400 text-sm">25 members</p>
                    </div>
                </div>
                <div className="commu-group cursor-pointer duration-300 hover:bg-slate-200/50 my-1 p-3 rounded-md flex items-center  ">
                    <Image width={1200} height={1200} className="rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="comm-text flex flex-col ms-2">
                        <p >Moviereview</p>
                        <p className="text-slate-400 text-sm">25 members</p>
                    </div>
                </div>
            </div>
        </>
    )
}