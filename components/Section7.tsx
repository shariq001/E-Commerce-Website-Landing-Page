import Image from 'next/image'
import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Section7 = () => {
  return (
    <div className='flex lg:flex-row xs:flex-col justify-center items-center gap-[88px] lg:gap-[40px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] my-[50px]'>
    
              {/* 1 */}
              <div className='flex justify-center items-center flex-col my-[30px] '>
                <div className='w-[80px] h-[80px] bg-gray-200 flex justify-center items-center rounded-full'>
                  <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
                    <Image src='/delivery.png' width={40} height={40} alt='Delivery' />
                  </div>
                </div>
                <p className={`text-[20px] font-semibold ${poppins.className}`}>FREE AND FAST DELIVERY</p>
                <p className={`text-[14px] ${poppins.className}`}>Free delivery for all orders over $140</p>
              </div>
    
              {/* 2 */}
              <div className='flex justify-center items-center flex-col my-[30px] '>
                <div className='w-[80px] h-[80px] bg-gray-200 flex justify-center items-center rounded-full'>
                  <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
                    <Image src='/service.png' width={40} height={40} alt='Delivery' />
                  </div>
                </div>
                <p className={`text-[20px] font-semibold ${poppins.className}`}>24/7 CUSTOMER SERVICE</p>
                <p className={`text-[14px] ${poppins.className}`}>Friendly 24/7 customer suppport</p>
              </div>
    
              {/* 3 */}
              <div className='flex justify-center items-center flex-col my-[30px] '>
                <div className='w-[80px] h-[80px] bg-gray-200 flex justify-center items-center rounded-full'>
                  <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
                    <Image src='/secure.png' width={40} height={40} alt='Delivery' />
                  </div>
                </div>
                <p className={`text-[20px] font-semibold ${poppins.className}`}>MONEY BACK GURANTEE</p>
                <p className={`text-[14px] ${poppins.className}`}>We return money within 30 days</p>
              </div>
            </div>
  )
}

export default Section7