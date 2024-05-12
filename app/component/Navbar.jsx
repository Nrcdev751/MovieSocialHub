import { FaHome } from "react-icons/fa";
export default function Navbar(){
    return(
        <nav className="bg-white p-5 border-2 border-slate-100">
                <div className="nav-menu flex justify-between">
                  <div className="nav-logo flex items-center text-lg">
                    <FaHome className="" />
                    <p className="font-bold ms-2">Home</p>
                  </div>
                  <div className="nav-logo">
                    <p className="font-bold">Profile</p>
                  </div>
                </div>
              </nav>
    )
}