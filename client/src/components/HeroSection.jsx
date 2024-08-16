import Button from "./Button"
import { RiScrollToBottomFill } from "react-icons/ri";

function HeroSection() {
  return (
    <div className="w-full grid-cols-1 grid   mx-auto bg-fixed sm:px-[0rem] justify-items-center items-center">
        <div id="hero-layer" className="absolute top-0 left-0 w-full h-[100.11vh] bg-[#EFF6FF] " style={{clipPath: `polygon(100% 82%, 0% 100%, 100% 100%)`}}></div>
        <div id="left-section" className="w-full lg:p-[2rem] p-[2rem] flex flex-col lg:pt-[4rem] bg-fixed items-center justify-center ">
            <div id="subheading" className="bg-[white] text-[1.8rem] font-[400] md:mt-[6rem] mt-[3rem] px-[1rem]">
                <h1>#1 ECOMMERCE PLATFORM 2024</h1>
            </div>
            <div id="heading" className="font-[600] mt-[2rem]">
                <h1 className="text-[6.4rem] text-center text-[#f3f5f4] font-[700] font-['mukta'] ">Explore, shop, <br /> repeat again.</h1>
            </div>
            <div id="title">
                <p className="text-[1.8rem] mt-[2rem] font-[500] text-[#ffffff] text-center">Commurz is a driving force behind the dreams of emering  enterprenures, <br /> a trusted partner for industry leaders.</p>
            </div>
            <div id="button" className="mt-[6rem] bg-[#28574B] rounded-[1rem] px-[1.5rem] mb-[2rem] flex gap-[.5rem] items-center" >
                <Button 
                    label = "Scroll"
                    bgColor={'bg-[#28574B]'}
                    color = {'text-[white]'}
                />
                <RiScrollToBottomFill size={'3rem'} color="white" />
            </div>
        </div>

        {
        //     <div id="right-section" className="lg:px-[5rem] p-[1rem] pt-[5rem]">
        //     <div id="card" className="w-[100%] ">

        //         <header className="flex justify-between py-[1.5rem] px-[3rem] font-[600] text-[2.4rem] bg-[#d2c2c27d] rounded-tl-[5rem] items-center">
        //         <div id="refresh" className="flex gap-[2rem] items-center ">
        //             <p>New Products</p>
        //             <p className={`hover:cursor-pointer`} >
        //                 <span id="refresh"  className={`hover:rotate-180`}>
        //                     <FiRefreshCw   size={'2.4rem'} onClick={() => {
        //                         setRandomIdx(Math.floor((Math.random()*19 +1)))
                                
        //                     }}/>
        //                 </span>
        //             </p>
                    
        //         </div>
        //         <div id="wishlist" className="relative hover:cursor-pointer" onClick={() => {
        //             if(productlist?.wishlistStatus){
        //               dispatch(resetwishlistStatus({id : productlist?.id , status :false}))
        //               dispatch(removeWishlistItem({id : productlist?.id , status : false}))
        //             }
        //             else{
        //               dispatch(addWishlistItem({id : productlist?.id , status : true , quantity :1 , image : productlist?.image , price : productlist?.price , category : productlist?.category , title : productlist?.title , rating : productlist?.rating}))
        //               dispatch(setWishlistStatus({id : productlist?.id , status : true}))
        //             }
        //           }}> 
        //             {
        //                 productlist?.wishlistStatus == true ? 
        //                     <FaHeart size={'2.4rem'} style={{color : 'red'}}/> :
        //                     <FaRegHeart size={'2.4rem'} />
                        
        //             }
                    
        //             </div>
        //         </header>
        //         {
        //           productlist && productlist.id > 0 ? <HeroCard 
        //                 key={productlist.id}
        //                 id={productlist.id}
        //                 image= {productlist.image}
        //                 title = {productlist.title}
        //                 rating={productlist.rating.rate}
        //                 cartlistStatus={productlist.cartStatus}
        //                 wishlistStatus={productlist.wishlistStatus}
        //                 price={productlist.price}
        //                 category={productlist.category}
        //            /> : <LoadingCard />
        //         }
                
        //     </div>
        // </div>
    }
    </div>
  )
}

export default HeroSection
