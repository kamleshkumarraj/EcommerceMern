import React from 'react'
import { BiSolidPieChartAlt2 } from "react-icons/bi"
import { FaMoneyBillTrendUp } from "react-icons/fa6"
import { GiChart } from "react-icons/gi"
function DashbordComp() {
  return (
    <div className="rounded-[10px] w-full p-[2rem]">
    <div id="header-dashbord">
        <div id="h1" className="mb-[5rem] font-[600] font-[Inter] text-[3.2rem] text-[black]">User Details </div>
    </div>
      <div id="header-section" className="grid w-full grid-cols-3 gap-[20px] ">
        
        <div id="total-income" className="w-full bg-gradient-to-tl color-[blue] bg-[green] p-[4rem] flex-col flex gap-[4rem] border-[1px] overflow-hidden border-[#03030334]">
            <GiChart size={'3rem'} color="white" style={{position : 'absolute' , top : '30%', right : '10%'}} />
            <h1 className="font-[600] text-[2.8rem] font-[Inter] text-[#fefefecc]">Total Products</h1>
            <p className="font-[500] text-[2rem] font-[Inter] text-[#fefefecc]">$20000</p>
            <p className="font-[500] font-[Inter] text-[1.8rem] text-[#fefefecc]">Monthly Income</p>
        </div>
        <div id="total-expanse" className="w-full bg-gradient-to-tl color-[blue] bg-[green] p-[4rem] flex-col flex gap-[4rem] border-[1px] overflow-hidden border-[#03030334]">
            <BiSolidPieChartAlt2 size={'3rem'} color="white" style={{position : 'absolute' , top : '30%', right : '10%'}}/>
            <h1 className="font-[600] text-[2.8rem] font-[Inter] text-[#fefefecc]">Total Customers</h1>
            <p className="font-[500] text-[2rem] font-[Inter] text-[#fefefecc]">$15000</p>
            <p className="font-[500] font-[Inter] text-[1.8rem] text-[#fefefecc]">Monthly Expanse</p>
        </div>
        <div id="total-budget" className="w-full bg-gradient-to-tl color-[blue] bg-[green] p-[4rem] flex-col flex gap-[4rem] border-[1px] overflow-hidden border-[#03030334]">
            <FaMoneyBillTrendUp size={'3rem'} color="white" style={{position : 'absolute' , top : '30%', right : '10%'}}/>
            <h1 className="font-[600] text-[2.8rem] font-[Inter] text-[#fefefecc]">Total Sellers</h1>
            <p className="font-[500] text-[2rem] font-[Inter] text-[#fefefecc]">$5000</p>
            <p className="font-[500] font-[Inter] text-[1.8rem] text-[#fefefecc]">Monthly Seller</p>
        </div>
        <div id="total-budget" className="w-full bg-gradient-to-tl color-[blue] bg-[green] p-[4rem] flex-col flex gap-[4rem] border-[1px] overflow-hidden border-[#03030334]">
            <FaMoneyBillTrendUp size={'3rem'} color="white" style={{position : 'absolute' , top : '30%', right : '10%'}}/>
            <h1 className="font-[600] text-[2.8rem] font-[Inter] text-[#fefefecc]">Total Orders</h1>
            <p className="font-[500] text-[2rem] font-[Inter] text-[#fefefecc]">$5000</p>
            <p className="font-[500] font-[Inter] text-[1.8rem] text-[#fefefecc]">Monthly Seller</p>
        </div>
        <div id="total-expanse" className="w-full bg-gradient-to-tl color-[blue] bg-[green] p-[4rem] flex-col flex gap-[4rem] border-[1px] overflow-hidden border-[#03030334]">
            <BiSolidPieChartAlt2 size={'3rem'} color="white" style={{position : 'absolute' , top : '30%', right : '10%'}}/>
            <h1 className="font-[600] text-[2.8rem] font-[Inter] text-[#fefefecc]">Remaining Orders</h1>
            <p className="font-[500] text-[2rem] font-[Inter] text-[#fefefecc]">$15000</p>
            <p className="font-[500] font-[Inter] text-[1.8rem] text-[#fefefecc]">Monthly Expanse</p>
        </div>
        <div id="total-income" className="w-full bg-gradient-to-tl color-[blue] bg-[green] p-[4rem] flex-col flex gap-[4rem] border-[1px] overflow-hidden border-[#03030334]">
            <BiSolidPieChartAlt2 size={'3rem'} color="white" style={{position : 'absolute' , top : '30%', right : '10%'}}/>
            <h1 className="font-[600] text-[2.8rem] font-[Inter] text-[#fefefecc]">Delivered Orders</h1>
            <p className="font-[500] text-[2rem] font-[Inter] text-[#fefefecc]">$15000</p>
            <p className="font-[500] font-[Inter] text-[1.8rem] text-[#fefefecc]">Monthly Expanse</p>
        </div>
      
      </div>

      
    </div>
  )
}

export default DashbordComp
