import React from 'react'
import Header from '@/components/Header'
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import Link from 'next/link'
import Image from 'next/image'
import { Star, Circle } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Poppins } from "next/font/google";
import Footer from '@/components/Footer'
import Section1 from '@/components/Section1'
import TimeBlock from '@/components/TimeBlock'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Home = () => {
  return (
    <div className=''>

      <div className='flex justify-between items-center bg-black text-white py-[15px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] sm:px-[10px]'>

        <p className='xs:hidden xl:block'></p>

        <p className='xs:hidden sm:block sm:text-[10px] lg:text-[14px] xl:text-[16px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-600 underline'>ShopNow</span></p>

        <div>
          <NativeSelect>
            <NativeSelectOption value="">English</NativeSelectOption>
            <NativeSelectOption value="todo">Urdu</NativeSelectOption>
            <NativeSelectOption value="in-progress">Arabic</NativeSelectOption>
            <NativeSelectOption value="cancelled">Turkish</NativeSelectOption>
          </NativeSelect>
        </div>

      </div>

      <Header />

      {/* Section 1 */}
      <Section1 />


      {/* Block */}
      <div className='flex justify-start items-center gap-[10px] w-[130px] lg:w-[220px] xl:w-[250px] 2xl:w-[300px] h-[40px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px]  my-[30px]'>

        <div className='w-[20px] h-[40px] bg-red-600 rounded-[5px]'></div>

        <p className={`font-semibold text-red-600 ${poppins.className}`}>Today&apos;s</p>

      </div>

      {/* Time */}
      <TimeBlock />

      {/* Section 2 */}
      <Section2 />

      <div className='flex justify-center items-center py-[30px]  '>
        <button title='Products' className='bg-[#db4444] text-white px-[48px] py-[16px] rounded-[4px] '>View All Products</button>
      </div>

      {/* Block */}
      <div className='flex justify-start items-center gap-[10px] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[330px] h-[40px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] my-[30px] '>

        <div className='w-[20px] h-[40px] bg-red-600 rounded-[5px]'></div>

          <p className={`font-semibold text-red-600 ${poppins.className}`}>Categories</p>

        </div>

      <h1 className='font-medium md:text-[36px] xs:text-[24px] sm:text-[30px] my-[30px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] '>Browse By Category</h1>

      {/* Section 3 */}
      <Section3 />

      {/* Block */}
      <div className='flex justify-start items-center gap-[10px] w-[190px] lg:w-[270px] xl:w-[300px] 2xl:w-[330px] h-[40px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px]  mb-[30px] mt-[40px]'>

        <div className='w-[20px] h-[40px] bg-red-600 rounded-[5px]'></div>

        <p className={`font-semibold text-red-600 ${poppins.className}`}>This Month</p>

      </div>

      <h1 className='font-medium md:text-[36px] xs:text-[24px] sm:text-[30px] my-[30px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px]'>Best Selling Products</h1>


      {/* Section 4 */}
      <Section4 />

      <div className='flex justify-center items-center 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] my-[30px]'>
        <Image src='/image.png' width={1170} height={500} alt='Music Experience' className=''/>
      </div>

      {/* Block */}
      <div className='flex justify-start items-center gap-[10px] w-[200px] lg:w-[260px] xl:w-[300px] 2xl:w-[350px] h-[40px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] mb-[30px] mt-[40px] py-[20px]'>

        <div className='w-[20px] h-[40px] bg-red-600 rounded-[5px]'></div>

        <p className={`font-semibold text-red-600 ${poppins.className}`}>Our Products</p>

      </div>

      <h1 className='font-medium md:text-[36px] xs:text-[24px] sm:text-[30px] my-[30px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px]'>Explore Our Products</h1>

      {/* Section 5 */}
      <Section5 />

        <div className='flex justify-center items-center py-[30px] mt-[20px]'>
          <button title='Products' className='bg-[#db4444] text-white px-[48px] py-[16px] rounded-[4px] '>View All Products</button>
        </div>


        {/* Block */}
        <div className='flex justify-start items-center gap-[10px] w-[200px] lg:w-[250px] xl:w-[270px] 2xl:w-[310px] h-[40px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] mb-[30px] mt-[40px] py-[20px]'>

        <div className='w-[20px] h-[40px] bg-red-600 rounded-[5px]'></div>

        <p className={`font-semibold text-red-600 ${poppins.className}`}>Featured</p>

      </div>

        <h1 className='font-medium md:text-[36px] xs:text-[24px] sm:text-[30px] my-[30px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px]'>New Arrival</h1>

        {/* Section 6 */}
        <Section6 />

        {/* Section 7 */}
        <Section7 />

        <Footer />
      
    </div>
  )
}


export default Home