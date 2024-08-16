import { Link } from 'react-router-dom';
import headerlogo from '../assets/Logo/headerlogo.png'
import { FaBars, FaCartPlus, FaHeart, FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { getCartLen } from '../store/Slices/AddCart';
import { getWishlistLen } from '../store/Slices/WishlistItem';
import { RxCross1 } from 'react-icons/rx';
import HumbugerMenu from './HumbugerMenu';
import { useState } from 'react';
import { getMyDetails, setUser } from '../store/Slices/selfDetails';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify'
import { getApiCall } from '../apicall/getApiCall';
import { setApiResponse } from '../store/Slices/apiHandle';

function Header() {
  const cartlen = useSelector(getCartLen)
  const wishlistLen = useSelector(getWishlistLen);
  const [menuClick , setMenuClick] = useState(false)
  const [profileClick , setProfileClick] = useState(false)
  const myDetails = useSelector(getMyDetails);
  const dispatch = useDispatch();
  let roles = myDetails.me?.roles
  const isLoggedIn = myDetails.me?.firstname
  console.log(myDetails.me)

  console.log(myDetails)
  
  const logoutUser = async () => {
    dispatch(setUser(undefined))
    dispatch(setApiResponse(undefined))
    localStorage.setItem('tocken' , undefined)
    await dispatch(getApiCall('http://localhost:2000/api/v2/auth/logout'))
    dispatch(setUser(undefined))
    toast.success("User logged out successfully")
    
  }
  
  return (
    <>
    <div id='header' className="sticky top-12 w-full mx-auto my-0 flex px-[4rem] py-[1rem] items-center justify-between  font-[Inter] text-[white]">
    
        <div id="logo" className='w-[15rem] hover:cursor-pointer'>
            <img className='w-[100%]' src={headerlogo} alt="Header Logo" />
        </div>
      
        <div id="menu" className='font-[500] text-[#white] text-[2rem]  gap-[2.5rem] hover:cursor-pointer hidden sm:flex sm:visible' >
            <Link to={'/'} >Home</Link>
            <Link to={'/market-place'}>Marketplace </Link>
            <Link to={'/wishlist-pages'} className='flex gap-[.8rem]' >
                  <span  >Wishlistpage</span>
                  <div id="wishlist" className="relative"> 
                  {
                   wishlistLen == 0 ?  <FaRegHeart  size={'2.4rem'} /> : <FaHeart size={'2.4rem'} style={{color : 'red'}}/>
                  }
                  <p className="absolute text-[1.3rem] top-[-20%] left-10 font-[500]">{wishlistLen}</p> 
                  
                  </div> 
            </Link> 
            <Link to={'/cart-pages'} className='flex' >
                <span>Cartpage</span>
                <div className='mx-[.3rem]'><FaCartPlus size={'3rem'}  /></div>
            </Link>
            <Link className='relative top-[-.9rem] left-[-2.6rem] text-[1.3rem] font-[500]' id="cartCount">{cartlen}</Link>
            
            
            
        </div>
        
        <div id="profile" className='flex gap-[1rem] hover:cursor-pointer  relative px-[3rem] items-center' onClick={() => setProfileClick(!profileClick)}>
                <p className='font-[500] text-[2rem] font-[Inter]' id="profile">Profile</p>
                <div id="avatar">
                   {isLoggedIn ?  
                    <p className='text-[2rem] font-[600] text-[#0a53d1] p-[.5rem] rounded-full bg-gray-200 font-[Inter]'>{(myDetails.me?.firstname[0] + myDetails.me?.lastname[0]).toUpperCase()}</p>: 
                    <div>
                      <div id="icons">
                        <FaRegCircleUser size={'3rem'} />
                      </div>
                    </div>} 
                </div>
                
                <div id={profileClick == true ? 'menu-box-visible' : 'menu-box-hidden'} className='w-full rounded-[10px] py-[1rem]  absolute top-[380%] font-[Inter] text-[2rem] font-[500] flex items-center justify-center flex-col gap-[1rem] translate-x-[-20%] '>
                    {isLoggedIn ? '' : <Link to={'/signin'}>Sign In</Link>}
                    {isLoggedIn ? <Link onClick={logoutUser} >Logged out</Link> : <Link to={'/login'}>Login</Link>}
                    {isLoggedIn ? <Link to={'/my-profile'}>My profile</Link> :''}
                    {roles == 'admin' ? <Link to={'/admin/dashbord'}>Dashbord</Link> : ''}
                </div>
            </div>

        
        {
          //code for clicking the toggle menu
          menuClick == true ? <div id="menu-bar" className='sm:hidden'     onClick={() =>{setMenuClick(!menuClick)}}>
            <RxCross1 size={'2.4rem'}/>
        </div>:
        <div id="menu-bar" className='sm:hidden'onClick={() =>{
            setMenuClick(!menuClick)
            }}>
            <FaBars size={'2.4rem'}/>
        </div>
        }
        
        <HumbugerMenu 
          setMenuClick={setMenuClick}
          menuClick={menuClick}
          cartlen={cartlen}
          wishlistLen={wishlistLen}
        />
    </div>
    
    </>
  )
}

export default Header
