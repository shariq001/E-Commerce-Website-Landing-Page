import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Section6 = () => {
  return (
    <div className='lg:grid-container lg:grid font-medium md:text-[36px] xs:text-[24px] sm:text-[30px] my-[30px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] my-[30px] xs:flex flex-col gap-[20px]'>

          {/* 1 */}
          <div className='div1 bg-black relative lg:w-[400px] xl:w-[560px] 2xl:w-[600px]'>
            <Image src='/gridimg1.png' width={630} height={600} alt='Play Station' />
            <div className='gap-[10px] text-white mx-[30px] absolute bottom-[30px]'>
              <p className='lg:text-[24px] xs:text-[16px] sm:text-[18px] md:text-[24px] font-semibold'>PlayStation 5</p>
              <p className={`lg:text-[14px] xs:text-[10px] sm:text-[12px] ${poppins.className} `}>Black and White version of the PS5 coming out on sale.</p>
              <Link href='' className={`font-medium ${poppins.className} underline xs:text-[12px] sm:text-[14px] md:text-[16px]`}>Shop Now</Link>
            </div>
          </div>

          {/* 2 */}
          <div className='div2 bg-black flex flex-row-reverse items-center relative lg:w-[440px] xl:w-[560px] 2xl:w-[600px]'>
            <Image src='/gridimg2.png' width={450} height={250} alt='Women Collection ' />
            <div className='gap-[10px] flex flex-col text-white mx-[25px] absolute bottom-[30px] left-0'>
              <p className='lg:text-[24px] xs:text-[16px] sm:text-[18px] md:text-[24px] font-semibold'>Women&apos;s Collections</p>
              <p className={`lg:text-[14px] xs:text-[10px] sm:text-[12px] ${poppins.className}`}>A Featured woman collections <br /> that give you another vibe.</p>
              <Link href='' className={`font-medium ${poppins.className} underline  xs:text-[12px] sm:text-[14px] md:text-[16px]`}>Shop Now</Link>
            </div>
          </div>


          {/* 3 */}
          <div className='div3 bg-black relative flex items-center justify-center md:hidden lg:block lg:w-[200px] xl:w-[270px] 2xl:w-[285px]'>
            <Image src='/gridimg4.png' width={230} height={280} alt='Womens Collection ' />
            <div className='gap-[10px] text-white mx-[25px] absolute bottom-[25px] left-[0px]'>
              <p className='lg:text-[24px] xs:text-[16px] sm:text-[18px] md:text-[24px] font-semibold'>Speakers</p>
              <p className={`lg:text-[14px] xs:text-[10px] sm:text-[12px] ${poppins.className}`}>Amazon wireless speakers</p>
              <Link href='' className={`font-medium ${poppins.className} underline  xs:text-[12px] sm:text-[14px] md:text-[16px]`}>Shop Now</Link>
            </div>
          </div>

          {/* 4 */}
          <div className='div4 bg-black relative flex items-center justify-center md:hidden lg:block lg:w-[200px] xl:w-[270px] 2xl:w-[285px]'>
            <Image src='/gridimg3.png' width={230} height={280} alt='Womens Collection ' />
            <div className='gap-[10px] text-white mx-[25px] absolute bottom-[30px] left-[0px]'>
              <p className='lg:text-[24px] xs:text-[16px] sm:text-[18px] md:text-[24px] font-semibold'>Perfume</p>
              <p className={`lg:text-[14px] xs:text-[10px] sm:text-[12px] ${poppins.className}`}>GUCCI INTENSE OUD EDP</p>
              <Link href='' className={`font-medium ${poppins.className} underline  xs:text-[12px] sm:text-[14px] md:text-[16px]`}>Shop Now</Link>
            </div>
          </div>

          <div className='flex justify-center items-center gap-[40px] xs:hidden md:flex lg:hidden'>

            {/* 3 */}
            <div className=' bg-black relative flex items-center justify-center w-[350px] h-[300px] md2:w-[400px]'>
            <Image src='/gridimg4.png' width={230} height={280} alt='Speakers ' />
              <div className='gap-[10px] text-white mx-[25px] absolute bottom-[25px] left-[0px]'>
                <p className='lg:text-[24px] xs:text-[16px] sm:text-[18px] md:text-[24px] font-semibold'>Speakers</p>
                <p className={`lg:text-[14px] xs:text-[10px] sm:text-[12px] ${poppins.className}`}>Amazon wireless speakers</p>
                <Link href='' className={`font-medium ${poppins.className} underline  xs:text-[12px] sm:text-[14px] md:text-[16px]`}>Shop Now</Link>
              </div>
            </div>

              {/* 4 */}
              <div className=' bg-black relative flex items-center justify-center w-[350px] h-[300px] md2:w-[400px]'>
                <Image src='/gridimg3.png' width={230} height={280} alt='Perfumes' />
                <div className='gap-[10px] text-white mx-[25px] absolute bottom-[30px] left-[0px]'>
                  <p className='lg:text-[24px] xs:text-[16px] sm:text-[18px] md:text-[24px] font-semibold'>Perfume</p>
                  <p className={`lg:text-[14px] xs:text-[10px] sm:text-[12px] ${poppins.className}`}>GUCCI INTENSE OUD EDP</p>
                  <Link href='' className={`font-medium ${poppins.className} underline  xs:text-[12px] sm:text-[14px] md:text-[16px]`}>Shop Now</Link>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Section6