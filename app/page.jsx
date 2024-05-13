import Sidemenu from "./component/Sidemenu.jsx";
import Navbar from "./component/Navbar.jsx";
export default function Home() {
  return (
    <section className="content">
      <div className=" drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="main-menu  ">
                <Navbar/>
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
