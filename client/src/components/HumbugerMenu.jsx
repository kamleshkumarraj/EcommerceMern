import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa6"
import { Link } from "react-router-dom"

function HumbugerMenu({menuClick , setMenuClick , wishlistLen , cartlen}) {
  return (
    <div id="humbuger-menu" className={menuClick == true ? 'md:hidden top-[100%]  w-[100%] h-[90vh] bg-[#252525e0] absolute py-[12rem]' : 'h-[0px] overflow-auto bg-[#252525e0] absolute w-[100%] md:hidden'}>
        <div id="menu" className=' text-[3rem] font-[600]  gap-[5rem] hover:cursor-pointer flex flex-col items-center text-white' onClick={() => {
          setMenuClick(!menuClick)
        }}>
        <Link to={'/'} >Home</Link>
        <Link to={'/market-place'}>Marketplace </Link>
        <Link to={'/wishlist-pages'} className='flex items-center gap-[1rem]' >
              <span>Wishlistpage</span>
              <div id="wishlist" className="relative"> 
              {
              wishlistLen == 0 ?  <FaRegHeart size={'2.4rem'} /> : <FaHeart size={'2.4rem'} style={{color : 'red'}}/>
              }
              <p className="absolute top-[-55%] left-11 text-[1.8rem]">{wishlistLen}</p> 
              
              </div> 
        </Link> 
        
        <Link to={'/cart-pages'} className='flex' >
              <div id="cart-btn" className='flex items-center gap-[1rem]'>
                <span>Cartpage</span>
                <div><FaCartPlus size={'3rem'}  /></div>
                </div>
        </Link>
        <Link className='relative top-[-10.5rem] left-[9.1rem] text-[2rem] font-[500]' id="cartCount">{cartlen}</Link>
        </div>
    </div>
  )
}

export default HumbugerMenu
