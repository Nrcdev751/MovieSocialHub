import Postwrite from "./Post/Postwrite.jsx";
import Post from "./Post/Post.jsx";
import { CiTimer } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

export default function Content(){
    return(
      <div className="md:p-4 md:col-span-2 lg:col-span-6">
          <div className="posting p-4 bg-white   shadow-md rounded-md">
              <Postwrite />
          </div>
              <Post />
             
          
      </div>
    )
}