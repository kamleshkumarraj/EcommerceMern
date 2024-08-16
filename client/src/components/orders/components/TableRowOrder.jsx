import product_image from '../../../assets/Images/product-image.svg'
function TableRowOrder() {
  return (
    <tr className="gap-[25px] w-full py-[15px] px-[40px] font-[Inter] font-[500] 2xl:text-[18.5px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15x] items-center border-b-[1px] border-b-[#00000030] grid grid-cols-7 justify-items-start flex-wrap">
        <td><img src={product_image} alt="" /></td>
        <td className="w-full col-start-2 col-end-4"><p>Lorem ipsum dolor</p></td>
        <td className="w-full"><p>19/02/2024</p></td>
        <td className="w-full"><p>$2398.00</p></td>
        <td className="w-full"><p>processing</p></td>
        <td>...</td>
    </tr>
  )
}

export default TableRowOrder
