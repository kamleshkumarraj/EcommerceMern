
function TableRowCustomer({name , email , username , logo}) {
  return (
    <tr className="gap-[25px] w-full py-[15px] px-[40px] font-[Inter] font-[500] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12.5x] text-[12px] items-center border-b-[1px] border-b-[#00000030] grid grid-cols-7 justify-items-start flex-wrap">
        <td><p className="px-[15px] py-[10px] bg-[#00000012] text-[blue] rounded-[8px]">{logo}</p></td>
        <td ><p>{name}</p></td>
        <td className="w-full col-start-3 col-end-4"><p>{username}</p></td>
        <td className="col-start-4 col-end-7"><p>{email}</p></td>
        <td>...</td>
    </tr>
  )
}

export default TableRowCustomer
