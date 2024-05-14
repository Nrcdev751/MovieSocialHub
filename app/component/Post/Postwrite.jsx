import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Image from 'next/image'
import profile from '../../src/profile.jpg'

export default function Postwrite(){
    return(
            <>
                <div className="posting-input flex" >
                    <Image className="w-8 h-8 rounded-full" src={profile} alt="" />
                    <input type="text" className="bg-red-200/25 rounded-full mx-2 w-full px-2 focus:outline-slate-100 text-sm" placeholder="  What's on your mind?" />
                </div>
                <div className="posting-interaction flex justify-between mt-4 items-center">
                        <div className="interaction-icon flex items-center">
                            <CiCamera className="text-2xl cursor-pointer text-slate-400 duration-200 hover:text-red-400/75 me-2" />
                            <CiImageOn className="text-2xl cursor-pointer text-slate-400 duration-200 hover:text-red-400/75 mx-2" />
                            <CiLink  className="text-2xl cursor-pointer text-slate-400 duration-200 hover:text-red-400/75 mx-2" />
                            <CiMap  className="text-2xl cursor-pointer text-slate-400 duration-200 hover:text-red-400/75 mx-2" />
                            <BsEmojiSmile  className="text-1xl cursor-pointer text-slate-400 duration-200 hover:text-red-400/75 mx-2" />
                        </div>
                <div className="interaction-button flex items-center ">
                        <div className="edit-icon flex mx-2">
                        <HiOutlinePencilSquare className="mx-1" />
                        <small className="text-slate-700/75">Draft</small>
                        </div>
                        <button className="border-2 border-slate-200 px-5 mx-2 flex rounded-md items-center">
                        <small>Post</small>
                        </button>
                    </div>
                </div>
            </>
            
    )
}