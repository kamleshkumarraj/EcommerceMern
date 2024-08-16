import Button from "../../Button"
import Input from "./Input"
import image from '../../../assets/Images/product-image.svg'
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

function AddProducts() {
  const [title , setTitle] = useState('');
  const [price , setPrice] = useState('');
  const [description , setDescription] = useState('');
  const [stockStatus , setStockStatus] = useState('');
  const [availableQty , setAvailableQty] = useState('');
  const [category , setCategory] = useState('');
  
  const formHandler = async (e) => {
    e.preventDefault();
    const data = {name : title , price , description , stock : availableQty , category }
    try{
     const response =  await axios.post('http://localhost:2000/api/v2/admin/product/new',data , {withCredentials : true})
     const { message} = response.data;
     toast.success(message)
     console.log("successfully added")
    }
    catch(err){
      const { message} = err.response.data;
      toast.error(message)
      console.log("error")
    }
    
  }
  
  return (
    <div id="customers" className="bg-[#ffffff] py-[30px] lg:py-[40px] w-full rounded-[10px] md:p-[4rem] p-[2rem]">
      <div id="product-header" className="flex items-center justify-between w-full">
        <h1 className="font-[Inter] text-left font-[500] 2xl:text-[23.78px] xl:text-[22px] lg:text-[21px] md:text-[20px] sm:text-[19px] text-[18px] 2xl:leading-[28.78px] xl:leading-[26px] lg:leading-[24px] md:leading-[22px] sm:leading-[20px] leading-[18px] px-[20px] lg:px-[30px]" id="">Add Product</h1>
        
      </div>
      <hr className="my-[30px]"/>

      <div id="add-products-form" className="lg:mt-[70px] sm:mt-[40px] mt-[20px] px-[30px]">
        <form action="" className="w-full p-[20x]" onSubmit={formHandler}>
          <div id="form-body" className="grid 2xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[80px]">
            <div id="left-part" className="flex flex-col gap-[30px]">
              <Input 
              lable={'Title'}
              type={'text'}
              setInput = {setTitle}
              input ={title}
            />
            <Input 
              lable={'Price'}
              type={'Number'}
              setInput={setPrice}
              input={price}
            />
            <Input 
              lable={'Category'}
              type={'text'}
              setInput={setCategory}
              input={category}
            />
            <Input 
                lable={'Stock Status'}
                type={'text'}
                setInput={setStockStatus}
                input={stockStatus}
              />
              
              
           
            
            <div id="description">
              <label className="font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]  py-[5px]" htmlFor="description">Description</label>
              <textarea onInput={(e) => {
                setDescription(e.target.value)
              }} value={description} rows={8} className="w-full p-[20x] border-[1px] border-[#0000001b] py-[10px] px-[10px] rounded-[8px] font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]" name="description" id="description"></textarea>
            </div>
            <div id="btn" className="w-[50%] my-[30px]">
              <Button />
            </div>
            
            </div>
            
            <div id="right-part" className="flex flex-col gap-[30px] ">
            <Input 
            lable={'Available quantity'}
            type={'number'}
            input={availableQty}
            setInput = {setAvailableQty}
            />
              <Input 
                lable={'Thumbanil'}
                type={'file'}
              />
              
              <Input 
                lable={'Images'}
                type={'file'}
              />
              <div id="prod-image" className="grid grid-cols-4 gap-[20px] mt-[20px]">
                <div id="img-1" className="w-full border-[1px] border-[#00000123] py-[5px] grid place-content-center bg-[#00000012] rounded-[5px] relative">
                  <div id="icon" className="absolute p-[5px] rounded-full grid place-content-center bg-[#00000012] right-[-14%] top-[-42%]">
                    <RxCross2 size={'15px'} />
                  </div>
                  <img className="w-[70%]" src={image} alt="image" />
                </div>
                <div id="img-1" className="w-full border-[1px] border-[#00000123] py-[5px] grid place-content-center bg-[#00000012] rounded-[5px] relative">
                  <div id="icon" className="absolute p-[5px] rounded-full grid place-content-center bg-[#00000012] right-[-14%] top-[-42%]">
                    <RxCross2 size={'15px'} />
                  </div>
                  <img className="w-[70%]" src={image} alt="image" />
                </div>
                <div id="img-1" className="w-full border-[1px] border-[#00000123] py-[5px] grid place-content-center bg-[#00000012] rounded-[5px] relative">
                   <div id="icon" className="absolute p-[5px] rounded-full grid place-content-center bg-[#00000012] right-[-14%] top-[-42%]">
                    <RxCross2 size={'15px'} />
                  </div>
                  <img className="w-[70%]" src={image} alt="image" />
                </div>
                
              
              </div>
              <div id="color">
                  <h1 className="font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]  py-[5px]">Colors</h1>
                  <div id="color" className="flex gap-[20px] mt-[10px]">
                    <p className="w-[30px] h-[30px] rounded-full bg-[#A3BEF8]"></p>
                    <p className="w-[30px] h-[30px] rounded-full bg-[#FFD58A]"></p>
                    <p className="w-[30px] h-[30px] rounded-full bg-[#83B18B]"></p>
                    <p className="w-[30px] h-[30px] rounded-full bg-[#4078FF]"></p>
                  </div>
              </div>
              <div id="sizes">
                <h1 className="font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]  py-[5px]">Sizes</h1>
                <div id="size" className="flex gap-[20px]">
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">S</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">M</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">X</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">XL</p>
                  <p className="text-[15px] font-[Inter] font-[500] w-[35px] h-[35px] bg-[#00000012] grid place-content-center border-[1px] border-[#00000024] p-[2px]">XML</p>
                </div>
              </div>
              <div id="btn">
                <input type="submit" value={"Submit"}/>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
  )
}

export default AddProducts
