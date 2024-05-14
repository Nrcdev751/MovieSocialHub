import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image'
export default function Trending(){
    return(
        <>
        <header className="posting p-4 w-100 bg-white   items-center shadow-sm rounded-md ">
                               <div className="trending-topic flex items-center justify-between mb-5">
                                  <p className="text-small">Today Trending</p>
                                    <IoIosArrowDown/>
                               </div>
                               <div className="trending-item my-2">
                                  <div className="group-text flex flex-col">
                                    <small className="text-red-800/70">1# Trending</small>
                                    <small className="text-md font-bold">Figma maintence</small>
                                    <small className="text-slate-800/75">125 posts</small>
                                  </div>
                               </div>
                               <div className="trending-item my-2">
                                  <div className="group-text flex flex-col">
                                    <small className="text-red-800/70">2# Trending</small>
                                    <small className="text-md font-bold">Figma maintence</small>
                                    <small className="text-slate-800/75">35 posts</small>
                                  </div>
                               </div>
                               <div className="trending-item my-2">
                                  <div className="group-text flex flex-col">
                                    <small className="text-red-800/70">3# Trending</small>
                                    <small className="text-md font-bold">Figma maintence</small>
                                    <small className="text-slate-800/75">20 posts</small>
                                  </div>
                               </div>
             
                        </header>
                        <header className="suggest-community">
                          <div className="header flex justify-between  my-5">
                            <small className="font-bold ">Suggested Community</small>
                            <small className="">View all</small>
                          </div>
                          <Image width={1200} height={120} src="https://images.unsplash.com/photo-1715558666340-f47008461cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-t-lg w-full" alt="" />
                          <div className="community-infomation flex flex-col p-4 bg-white shadow-sm rounded-b-lg">
                            <small className="font-bold">Animehub community</small>
                            <small className="text-slate-800/75 mt-2">500 members 10 post/day</small>
                            <button className="p-1 text-blue-600 border-2 hover:bg-blue-600 duration-200 hover:text-white border-slate-300 rounded-md flex items-center justify-center my-3"><small>Join community</small></button>
                          </div>
                        </header>
        </>
    )
}