import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Section3 = () => {
  return (
    <div className=' my-[30px] lg:block lg:w-[900px] xl:w-[1000px] 2xl:w-[1240px] flex justify-center items-center'>
        <Carousel className='2xl:mx-[100px] xl:mx-[80px] lg:mx-[60px] md:mx-[30px] xs:mx-[10px]  xs:hidden lg:block lg:w-[900px] xl:w-[1100px] 2xl:w-[1240px]' opts={{align: "start",loop: true,}}>
          <CarouselContent>
            <CarouselItem>
              <div className='flex justify-center items-center lg:gap-[10px] xl:gap-[30px]'>

                <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/phone.png' width={56} height={56} alt='Phone' />
                  <p className={`${poppins.className}`}>Phones</p>
                </div>

                <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/computer.png' width={56} height={56} alt='Computer' />
                  <p className={`${poppins.className}`}>Computers</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/watch.png' width={56} height={56} alt='Watch' />
                  <p className={`${poppins.className}`}>SmartWatch</p>
              </div>

              <div className='w-[170px] h-[145px] flex justify-center flex-col items-center gap-[10px] bg-[#DB4444]'>
                  <Image src='/camera.png' width={56} height={56} alt='Camera' />
                  <p className={`${poppins.className} text-white`}>Camera</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/headphone.png' width={56} height={56} alt='Headphone' />
                  <p className={`${poppins.className}`}>Headphone</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/gaming.png' width={56} height={56} alt='Gaming' />
                  <p className={`${poppins.className}`}>Gaming</p>
              </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center items-center lg:gap-[10px] xl:gap-[30px]'>
                <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/phone.png' width={56} height={56} alt='Phone' />
                  <p className={`${poppins.className}`}>Phones</p>
                </div>

                <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/computer.png' width={56} height={56} alt='Computer' />
                  <p className={`${poppins.className}`}>Computers</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/watch.png' width={56} height={56} alt='Watch' />
                  <p className={`${poppins.className}`}>SmartWatch</p>
              </div>

              <div className='w-[170px] h-[145px] flex justify-center flex-col items-center gap-[10px] bg-[#DB4444]'>
                  <Image src='/camera.png' width={56} height={56} alt='Camera' />
                  <p className={`${poppins.className} text-white`}>Camera</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/headphone.png' width={56} height={56} alt='Headphone' />
                  <p className={`${poppins.className}`}>Headphone</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/gaming.png' width={56} height={56} alt='Gaming' />
                  <p className={`${poppins.className}`}>Gaming</p>
              </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center items-center lg:gap-[10px] xl:gap-[30px]'>
                <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/phone.png' width={56} height={56} alt='Phone' />
                  <p className={`${poppins.className}`}>Phones</p>
                </div>

                <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/computer.png' width={56} height={56} alt='Computer' />
                  <p className={`${poppins.className}`}>Computers</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/watch.png' width={56} height={56} alt='Watch' />
                  <p className={`${poppins.className}`}>SmartWatch</p>
              </div>

              <div className='w-[170px] h-[145px] flex justify-center flex-col items-center gap-[10px] bg-[#DB4444]'>
                  <Image src='/camera.png' width={56} height={56} alt='Camera' />
                  <p className={`${poppins.className} text-white`}>Camera</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/headphone.png' width={56} height={56} alt='Headphone' />
                  <p className={`${poppins.className}`}>Headphone</p>
              </div>

              <div className='w-[170px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/gaming.png' width={56} height={56} alt='Gaming' />
                  <p className={`${poppins.className}`}>Gaming</p>
              </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className='lg:hidden xs:flex justify-center items-center'>
          <Carousel className='2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] w-[210px] md:w-[300px]' opts={{align: "start",loop: true,}}>
          <CarouselContent>
            <CarouselItem className='flex justify-center items-center'>
              <div className='w-[150px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/phone.png' width={56} height={56} alt='Phone' />
                  <p className={`${poppins.className}`}>Phones</p>
                </div>
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <div className='w-[150px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/computer.png' width={56} height={56} alt='Computer' />
                  <p className={`${poppins.className}`}>Computers</p>
              </div>
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <div className='w-[150px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/watch.png' width={56} height={56} alt='Watch' />
                  <p className={`${poppins.className}`}>SmartWatch</p>
              </div>
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <div className='w-[150px] h-[145px] flex justify-center flex-col items-center gap-[10px] bg-[#DB4444]'>
                  <Image src='/camera.png' width={56} height={56} alt='Camera' />
                  <p className={`${poppins.className} text-white`}>Camera</p>
              </div>
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <div className='w-[150px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/headphone.png' width={56} height={56} alt='Headphone' />
                  <p className={`${poppins.className}`}>Headphone</p>
              </div>
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <div className='w-[150px] h-[145px] border-gray-400 border-[1px] flex justify-center flex-col items-center gap-[10px]'>
                  <Image src='/gaming.png' width={56} height={56} alt='Gaming' />
                  <p className={`${poppins.className}`}>Gaming</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
      </div>
  )
}

export default Section3