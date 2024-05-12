import Sidemenu from "./component/Sidemenu.jsx";
import Navbar from "./component/Navbar.jsx";
export default function Home() {
  return (
    <section className="content">
      <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-4 ">
            <div className="side-menu  col-span-1 p-4 shadow-md">
              <Sidemenu/>
            </div>
            <div className="main-menu  col-span-3">
              <Navbar/>
            </div>
          </div>
      </div>
    </section>
  );
}
