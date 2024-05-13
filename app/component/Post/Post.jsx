import { CiTimer } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

export default function Post(){
    return(
            <>
                <div className="posting  bg-white  my-5 shadow-md rounded-md">
                 <div className="card p-4">
                    <div className="posting-topic flex items-center justify-between">
                        <div className="header-posting-left flex items-center">
                          <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          <div className="flex flex-col">
                            <p className="text-dark text-sm ms-2 ">Lucky Andreas</p>
                            <div className="flex items-center ms-2">
                              <CiTimer className="text-sm text-slate-500/75"/>
                              <small className="text-slate-500/75"> 12 minutes ago on</small>
                              <small className="font-bold ms-1">Front-end Developer</small>
                            </div>
                          </div>
                        </div>
                        <div className="header-posting-right flex items-center">
                          <IoBookmarkOutline className="text-lg duration-200 cursor-pointer  text-slate-600/75 hover:text-slate-800"/>
                          <CiMenuKebab className="text-lg ms-2 duration-200 cursor-pointer text-slate-600/75 hover:text-slate-800"/>
                        </div>
                    </div>
                  <p className="my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sapiente culpa explicabo facere atque neque, consequuntur esse magnam accusantium saepe dignissimos perferendis dolores quasi odio ex! Dolores illum eligendi officia!</p>
                 </div>
                 <img className=" w-full" src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 <div className="like-menu p-4 flex justify-between items-center">
                      <div className="group flex justify-between items-center">
                        <IoMdHeartEmpty /> 
                        <small className="mx-2 font-bold">1,7K</small>
                      </div>
                      <div className="group flex justify-between items-center">
                        <BiCommentDetail /> 
                        <small className="mx-2">Comment</small>
                        <small className="mx-2 font-bold">40</small>
                      </div>
                      <div className="group flex justify-between items-center ">
                        <LuShare2 /> 
                        <small className="mx-2">Share</small>
                        <small className="mx-2 font-bold">600</small>
                      </div>
                 </div>
                 <div className="line"></div> 
                 <div className="section-comment p-4">
                    <div className="posting-input flex" >
                        <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <input type="text" className="bg-red-200/25 rounded-full mx-2 w-full px-2 focus:outline-slate-100 text-sm" placeholder="  What's on your mind?" />
                    </div>
                    <div className="sort-comment flex justify-between items-center my-3">
                      <div className="all-comment flex items-center ">
                        <p className="text-sm">All comments</p>
                        <IoIosArrowDown className="text-sm" />
                      </div>
                      <div className="all-comment flex items-center ">
                        <p className="text-sm mx-2">Sort by</p>
                        <p className="text-sm font-bold">Most popular</p>
                      </div>
                    </div>
                    <div className="p-3 flex">
                      <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                      <div className="comment-text flex flex-col">
                          <p className=" text-sm ms-2"><span className="text-dark font-bold">Abdul</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam deserunt ab veritatis rerum enim dolores exercitationem modi a, dolorem laborum?</p>
                      </div>
                    </div>
                 <div className="line"></div> 
                 <span className="text-blue-600 text-small mt-2 flex justify-center items-center cursor-pointer">View all commments</span>
                 </div>
          </div>
            </>
            
    )
}