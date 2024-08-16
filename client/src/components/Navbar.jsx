import { LiaArrowRightSolid } from "react-icons/lia";
import { BsHandbagFill } from "react-icons/bs";
import Header from "./Header";


function Navbar() {
    
    
  
  return (
    <div id="nav-bar" className="w-[100%] z-[20]  bg-[#c9bfa9] sticky top-0 " >
      <div className='bg-[#28574B] px-[2rem] font-[600] text-[1.8rem] mx-auto py-[1.3rem] flex justify-center'>
          <a className="flex gap-[1rem] text-[white] items-center" href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
              <BsHandbagFill size={'2rem'} style={{color : 'yellow'}}/>
              <p className='font-[500] text-[1.5rem]'>Get a 30% Discount on All Products! <span className="font-[700]"> Shop now</span></p>
              <LiaArrowRightSolid size={'2.4rem'}/>
          </a>
      </div>
      <Header />
    </div>
  )
}

export default Navbar
