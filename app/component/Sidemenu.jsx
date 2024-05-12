import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
export default function Sidemenu(){
    return(
        <>
        <h3 className="text-xl font-bold text-blue-600">MovieSocialhub</h3>
        <label className="input input-bordered flex items-center gap-2 my-5">
            <input type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
            <div className="sub-menu my-5">
                <div className="p-4 cursor-pointer bg-slate-200/50 my-2 rounded-md flex items-center">
                    <FaHome className="text-blue-600 " />
                    <h1 className="text-blue-700 ms-2">Home</h1>
                </div>
                <div className="p-4 cursor-pointer duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaUsers />
                    <h1 className="text-slate-500 ms-2">Community</h1>
                </div>
                <div className="p-4 cursor-pointer duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaShoppingBasket />
                    <h1 className="text-slate-500 ms-2">Shop</h1>
                </div>
                <div className="p-4 cursor-pointer duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaCalendarAlt />
                    <h1 className="text-slate-500 ms-2">Events</h1>
                </div>
                <div className="p-4 cursor-pointer duration-300 hover:bg-slate-200/50 my-2 rounded-md  flex items-center">
                    <FaNewspaper />
                    <h1 className="text-slate-500 ms-2">News</h1>
                </div>
            </div>
            <div className="sub-menu">
                <p>My community</p>
            </div>
        </>
    )
}