import Sidemenu from "./component/Sidemenu.jsx";
import Navbar from "./component/Navbar.jsx";
import Trending from "./component/Trending.jsx";
import Content from "./component/Content.jsx";


export default function Home() {
  return (
    <section className="content">
      <div className=" drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-red-200/25">
              <div className="main-menu">
                <Navbar/>
                <div className="hidden md:block">
                  <br /><br /><br /><br />
                </div>
                <div className="max-w-screen-xl ">
                  <div className="grid md:grid-cols-3 lg:grid-cols-12 gap-20">
                    
                    <div className="hidden lg:block lg:col-span-3"></div>
                    <Content/>
                    {/* another tab */}
                    <div className="p-4 md:col-span-1 lg:col-span-3 hidden md:block ">
                      <Trending/>
                    </div>
                  </div>
                </div>
              </div>
          </div> 
          <div className="drawer-side shadow-md">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
              <Sidemenu/>
            </ul>
          </div>
      </div>
    </section>
  );
}
