
import profile from '../../src/profile.jpg'
import Image from 'next/image'

export default function Mychat(){
    return(
            <>
                        <div className="chat-group my-5 mx-2 flex items-center flex-row-reverse">
                          <Image className="rounded-full w-8 h-8" src={profile} alt="" />
                          <small className="bg-white rounded-full p-2 shadow-sm inline-block mx-2">Lorem ipsum dolor sit amet.</small>
                        </div>
            </>
            
    )
}