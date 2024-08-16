import { PiSignOutBold } from 'react-icons/pi'
import logo from '../assets/Logo/header-logo.svg'
import { VscChevronRight } from 'react-icons/vsc'
function DashbordHeader() {
  return (
    <div id="admin-header" className="w-full bg-[#524BAD] 2xl:px-[140px] xl:px-[100px] lg:px-[70px] md:px-[50px] sm:px-[40px] px-[20px] py-[1rem] flex justify-between text-[#fff] items-center">
        <div id="right" className='flex xl:gap-[120px] md:gap-[80px] gap-[40px] w-full items-center'>
            <div id="header-logo" className='sm:flex items-center gap-[5px] hidden '>
                <div id="logo" className='sm:w-[42px] w-[30px] gap-[10px]'>
                    <img className='w-full' src={logo} alt="header-logo" />
                </div>
                <div id="admin-title">
                    <h1 className='font-[Manrope] font-[800] 2xl:text-[26.43px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] 2xl:leading-[31.71px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-left' id='title'>Admin</h1>
                </div>
            </div>
            <div id="location-header" className="flex items-center w-full 2xl:gap-[10px] xl:gap-[9px] lg:gap-[8px] md:gap-[7px] sm:gap-[6px] gap-[5px]">
                <p className="font-[DM Sans] font-[500] 2xl:text-[18.9px] xl:text-[16px] lg:text-[15px] md:text-[14.5px] sm:text-[14px] text-[13px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-left " >Home</p>
                <VscChevronRight size={'20px'} />
                <p className="font-[DM Sans] font-[500] 2xl:text-[18.9px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14.5px] text-[14px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px]  text-left"  >Admin</p>
    
            </div>
            
        </div>
        
        <div id="left">
            <div id="sing-out-icon">
                <PiSignOutBold size={'30px'} color='white'/>
            </div>
        </div>
    </div>
  )
}

export default DashbordHeader
