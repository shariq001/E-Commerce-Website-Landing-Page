import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const TimeBlock = () => {
  return (
      <div className='flex lg:flex-row xs:flex-col  xs:items-start xs:gap-[20px] justify-start xl:items-end gap-[50px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] my-[10px] lg:w-[900px] lg:gap-[40px] xs:w-[300px]'>
        <h1 className='font-medium text-[36px] '>Flash Sales</h1>

        <div className='flex  xs:justify-start lg:justify-end items-center lg:gap-[20px] xs:gap-[10px] '>
          <div className='flex flex-col justify-start'>
            <p className={`${poppins.className} text-[12px]`}>Days</p>
            <p className='font-bold text-[32px]'>03</p>
          </div>

          <p className='text-[#E07575] text-[30px] font-bold'>:</p>

          <div className='flex flex-col justify-start'>
            <p className={`${poppins.className} text-[12px]`}>Hours</p>
            <p className='font-bold text-[32px]'>23</p>
          </div>

          <p className='text-[#E07575] text-[30px] font-bold'>:</p>

          <div className='flex flex-col justify-start'>
            <p className={`${poppins.className} text-[12px]`}>Minutes</p>
            <p className='font-bold text-[32px]'>19</p>
          </div>

          <p className='text-[#E07575] text-[30px] font-bold'>:</p>

          <div className='flex flex-col justify-start'>
            <p className={`${poppins.className} text-[12px]`}>Seconds</p>
            <p className='font-bold text-[32px]'>56</p>
          </div>
        </div>
      </div>
  )
}

export default TimeBlock