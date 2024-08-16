import { Outlet } from "react-router-dom"
import DashbordHeader from "../components/DashbordHeader.jsx"
import DashbordSideMenu from "../components/DashbordSidemenu.jsx"


function Dashbord() {

  return (
    <>
    <div id="main-page" className="bg-[#F6F6F6]">
      <DashbordHeader />
      <div id="page-body" className="flex gap-[2rem] ">
        <DashbordSideMenu />
        <div id="page-body" className=" py-[5rem] w-full">
          <Outlet />
        </div>
        </div>
      </div>
    </>
    
  )
}

export default Dashbord
