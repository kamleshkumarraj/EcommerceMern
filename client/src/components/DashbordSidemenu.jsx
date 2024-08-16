import { BsFillPersonFill } from "react-icons/bs";
import { IoSettingsSharp, IoStarOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { TiShoppingBag, TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom"

function SideMenu() {
    const navHandler = (status) => status ? 'bg-[#807d7e22] rounded-[5px] ' : '';
  return (
    <div className="w-[350px] hidden xl:block md:pr-[60px] pr-[20px] bg-[#ffffff]" id="sidemenu">
    <div id="menu" className="flex flex-col 2xl:mt-[40px] xl:mt-[36px] lg:mt-[32px] md:mt-[30px] sm:mt-[27px] mt-[25px] gap-[20px] xl:px-[70px] px-[40px] md:py-[40px] py-[20px]">
        <NavLink to={'/admin/dashbord'} className={(status) => navHandler(status.isActive)+'2xl:w-[260px] xl:w-[250px] sm:w-[220px] w-[180px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]'}>
            <div id="icon"><MdOutlineDashboard size={'30px'} color="#807D7E" /></div>
            <div className="font-[Inter] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[18px] xl:text-[17.5px] lg:text-[17px] md:text-[16.5px] sm:text-[16px] text-[15px] text-[#5C5F6A]" id="para">Dashbord</div>
        </NavLink>

        <NavLink to={'/admin/products'} className={(status) => navHandler(status.isActive)+'2xl:w-[260px] xl:w-[250px] sm:w-[220px] w-[180px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]'}>
            <div id="icon"><TiShoppingBag  size={'30px'} color="#807D7E" /></div>
            <div className="font-[Inter] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[18px] xl:text-[17.5px] lg:text-[17px] md:text-[16.5px] sm:text-[16px] text-[15px] text-[#5C5F6A] " id="para">Product</div>
        </NavLink>

        <NavLink to={'/admin/orders'} className={(status) => navHandler(status.isActive)+'2xl:w-[260px] xl:w-[250px] sm:w-[220px] w-[180px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]'}>
            <div id="icon"><TiShoppingCart size={'30px'} color="#807D7E" /></div>
            <div className="font-[Inter] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[18px] xl:text-[17.5px] lg:text-[17px] md:text-[16.5px] sm:text-[16px] text-[15px] text-[#5C5F6A]" id="para">Orders</div>
        </NavLink>
        
        <NavLink to={'/admin/customers'} className={(status) => navHandler(status.isActive)+'2xl:w-[260px] xl:w-[250px] sm:w-[220px] w-[180px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]'}>
            <div id="icon"><BsFillPersonFill size={'30px'} color="#807D7E" /></div>
            <div className="font-[Inter] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[18px] xl:text-[17.5px] lg:text-[17px] md:text-[16.5px] sm:text-[16px] text-[15px] text-[#5C5F6A]" id="para">Customers</div>
        </NavLink>

        <NavLink to={'/admin/sign-out'} className={(status) => navHandler(status.isActive)+'2xl:w-[260px] xl:w-[250px] sm:w-[220px] w-[180px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]'}>
            <div id="icon"><IoStarOutline size={'30px'} color="#807D7E" /></div>
            <div className="font-[Inter] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[18px] xl:text-[17.5px] lg:text-[17px] md:text-[16.5px] sm:text-[16px] text-[15px] text-[#5C5F6A]" id="para">Reviews</div>
        </NavLink>
        
        <NavLink to={'/admin/sign-out'} className={(status) => navHandler(status.isActive)+'2xl:w-[260px] xl:w-[250px] sm:w-[220px] w-[180px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px]'}>
            <div id="icon"><IoSettingsSharp size={'30px'} color="#807D7E" /></div>
            <div className="font-[Inter] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[18px] xl:text-[17.5px] lg:text-[17px] md:text-[16.5px] sm:text-[16px] text-[15px] text-[#5C5F6A]" id="para">Setting</div>
        </NavLink>
    </div>
    <hr />
    </div>
  )
}

export default SideMenu
