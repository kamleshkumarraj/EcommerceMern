import { CiSearch } from "react-icons/ci"
import Button from "./Button"
import ProductTable from "./ProductTable"
import { Link } from "react-router-dom"

function Products() {
  return (
    <div id="customers" className="bg-[#ffffff] px-[20px] py-[30px] lg:px-[30px] lg:py-[40px] w-full rounded-[10px]">
      <div id="product-header" className="flex items-center justify-between w-full">
        <h1 className="font-[Inter] text-left font-[500] 2xl:text-[23.78px] xl:text-[22px] lg:text-[21px] md:text-[20px] sm:text-[19px] text-[18px] 2xl:leading-[28.78px] xl:leading-[26px] lg:leading-[24px] md:leading-[22px] sm:leading-[20px] leading-[18px]" id="">Products</h1>
        <div id="btn-search" className="flex gap-[20px] w-[504px]">
          <Link to={'/admin/products/add-products'} id="btn">
            <Button />
          </Link>
          <div id="search" className="border-[1px] border-[#0000001f] flex gap-[10px] items-center px-[15px] rounded-[8px]">
            <CiSearch size={'30px'}/>
            <input className="focus:outline-none focus:border-none" type="text" placeholder="Search products"/>
          </div>
        </div>
      </div>
      <div id="product-table-content" className="w-full">
        <ProductTable />
      </div>
    </div>
  )
}

export default Products
