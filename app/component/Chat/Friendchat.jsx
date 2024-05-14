import Image from 'next/image'
export default function Friendchat(){
    return(
            <>
                        <div className="chat-group my-5 mx-2 flex items-center">
                          <Image width={120} height={120} className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          <small className="bg-white rounded-full p-2 shadow-sm inline-block mx-2">Lorem ipsum dolor sit amet.</small>
                        </div>     
            </>
            
    )
}