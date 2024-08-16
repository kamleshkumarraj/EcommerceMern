
// eslint-disable-next-line react/prop-types
function Input({lable , placeholder , type ,  setInput , input}) {
  
  return (
    <div className="w-full" id="custom-input-field">
      <label className="font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]  py-[5px]" htmlFor={lable}>{lable}</label>
      <input value={input}  onInput={(e) => {
        setInput(e.target.value)
      }} type={type} placeholder={placeholder} className="w-full border-[1px] border-[#0000001b] py-[10px] px-[10px] rounded-[8px]font-[Inter] font-[500] text-left 2xl:text-[18.5px] xl:text-[18px] lg:text-[17.5px] md:text-[17px] sm:text-[16px] text-[15px] 2xl:leading-[32.37px] xl:leading-[30px] lg:leading-[27px] md:leading-[24px] sm:leading-[20px] leading-[16px]" />
    </div>
  )
}

export default Input
