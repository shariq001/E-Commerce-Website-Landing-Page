import { Circle, Star } from 'lucide-react'
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

const Section5 = () => {
  return (
    <div className='my-[30px] lg:block lg:w-[900px] xl:w-[1120px] 2xl:w-[1240px]'>
        <Carousel className='2xl:mx-[100px] xl:mx-[80px] lg:mx-[60px] md:mx-[30px] xs:mx-[10px]  xs:hidden lg:block lg:w-[900px] xl:w-[1120px] 2xl:w-[1240px]' opts={{align: "start",loop: true,}}>
          <CarouselContent>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[40px] lg:gap-[10px] 2xl:gap-[30px] my-[30px] overflow-x-auto scroll-smooth no-scrollbar py-[30px]'>

                {/* 1 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/puppy.png' width={270} height={250} alt='Dog Food' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Breed Dry Dog Food</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$100 </p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(35)</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/canon.png' width={270} height={250} alt='Canon' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>CANON EOS DSLR Camera</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$360</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(95)</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/laptop.png' width={270} height={250} alt='laptop' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>ASUS FHD Gaming Laptop</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$700</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(325)</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[270px] flex flex-col gap-[6px] lg:hidden xl:block'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/items.png' width={270} height={250} alt='Product Set' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Small BookSelf</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$500</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(65)</p>
                  </div>
                </div>
                
              </div>

              <div className='flex justify-center items-center gap-[40px] lg:gap-[10px] 2xl:gap-[30px] my-[30px] overflow-x-auto scroll-smooth no-scrollbar py-[30px]'>

                {/* 1 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/car.png' width={270} height={250} alt='Car' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Kids Electric Car</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$960 </p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(65)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#FB1314]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 2 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/shoe.png' width={270} height={250} alt='Shoe' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Jr. Zoom Soccer Cleats</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$1160</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(35)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#EEFF61]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 3 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/gamepad.png' width={270} height={250} alt='Gamepad' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>GP11 Shooter USB Gamepad</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 4 */}
                <div className='w-[270px] flex flex-col gap-[6px] lg:hidden xl:block'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/shirt.png' width={270} height={250} alt='Shirt' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Quilted Satic Jacket</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>
                
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[40px] lg:gap-[10px] 2xl:gap-[30px] my-[30px] overflow-x-auto scroll-smooth no-scrollbar py-[30px]'>

                {/* 1 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/puppy.png' width={270} height={250} alt='Dog Food' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Breed Dry Dog Food</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$100 </p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(35)</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/canon.png' width={270} height={250} alt='Canon' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>CANON EOS DSLR Camera</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$360</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(95)</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/laptop.png' width={270} height={250} alt='laptop' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>ASUS FHD Gaming Laptop</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$700</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(325)</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[270px] flex flex-col gap-[6px] lg:hidden xl:block'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/items.png' width={270} height={250} alt='Product Set' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Small BookSelf</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$500</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(65)</p>
                  </div>
                </div>
                
              </div>

              <div className='flex justify-center items-center gap-[40px] lg:gap-[10px] my-[30px] overflow-x-auto scroll-smooth no-scrollbar py-[30px]'>

                {/* 1 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/car.png' width={270} height={250} alt='Car' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Kids Electric Car</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$960 </p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(65)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#FB1314]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 2 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/shoe.png' width={270} height={250} alt='Shoe' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Jr. Zoom Soccer Cleats</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$1160</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(35)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#EEFF61]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 3 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/gamepad.png' width={270} height={250} alt='Gamepad' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>GP11 Shooter USB Gamepad</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 4 */}
                <div className='w-[270px] flex flex-col gap-[6px] lg:hidden xl:block'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/shirt.png' width={270} height={250} alt='Shirt' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Quilted Satic Jacket</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>
                
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex justify-center items-center gap-[40px] lg:gap-[10px] my-[30px] overflow-x-auto scroll-smooth no-scrollbar py-[30px]'>

                {/* 1 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/puppy.png' width={270} height={250} alt='Dog Food' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Breed Dry Dog Food</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$100 </p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(35)</p>
                  </div>
                </div>

                {/* 2 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/canon.png' width={270} height={250} alt='Canon' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>CANON EOS DSLR Camera</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$360</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(95)</p>
                  </div>
                </div>

                {/* 3 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/laptop.png' width={270} height={250} alt='laptop' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>ASUS FHD Gaming Laptop</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$700</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(325)</p>
                  </div>
                </div>

                {/* 4 */}
                <div className='w-[270px] flex flex-col gap-[6px] lg:hidden xl:block'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/items.png' width={270} height={250} alt='Product Set' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Small BookSelf</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$500</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(65)</p>
                  </div>
                </div>
                
              </div>

              <div className='flex justify-center items-center gap-[40px] lg:gap-[10px] my-[30px] overflow-x-auto scroll-smooth no-scrollbar py-[30px]'>

                {/* 1 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/car.png' width={270} height={250} alt='Car' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Kids Electric Car</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$960 </p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(65)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#FB1314]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 2 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/shoe.png' width={270} height={250} alt='Shoe' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Jr. Zoom Soccer Cleats</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$1160</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(35)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#EEFF61]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 3 */}
                <div className='w-[270px] flex flex-col gap-[6px]'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/gamepad.png' width={270} height={250} alt='Gamepad' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>GP11 Shooter USB Gamepad</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>

                {/* 4 */}
                <div className='w-[270px] flex flex-col gap-[6px] lg:hidden xl:block'>
                  <div className='w-[270px] h-[250px] bg-gray-200'>
                    <Image src='/shirt.png' width={270} height={250} alt='Shirt' />
                  </div>

                  <h3 className={`font-medium ${poppins.className}`}>Quilted Satic Jacket</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>
                
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className='lg:hidden xs:flex justify-center items-center'>
          <Carousel className='2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] xs:w-[220px] sm:w-[250px] md:w-[300px]' opts={{align: "start",loop: true,}}>
                  <CarouselContent>
                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                        <div className='w-[200px] h-[180px] bg-gray-200'>
                          <Image src='/puppy.png' width={270} height={250} alt='Dog Food' />
                        </div>

                        <h3 className={`font-medium text-[14px] ${poppins.className}`}>Breed Dry Dog Food</h3>

                        

                        <div className='flex justify-start items-center gap-[6px]'>

                          <p className='text-[#DB4444] text-[14px]'>$100 </p>

                          <div className='flex justify-start items-center gap-[2px]'>
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                          </div>

                          <p className='text-gray-400'>(35)</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                        <div className='w-[200px] h-[180px] bg-gray-200'>
                          <Image src='/shoe.png' width={270} height={250} alt='Shoe' />
                        </div>

                        <h3 className={`font-medium text-[14px] ${poppins.className}`}>Jr. Zoom Soccer Cleats</h3>

                        

                        <div className='flex justify-start items-center gap-[6px]'>

                          <p className='text-[#DB4444] text-[14px]'>$1160</p>

                          <div className='flex justify-start items-center gap-[2px]'>
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                            <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                          </div>

                          <p className='text-gray-400'>(35)</p>
                        </div>

                        <div className='flex justify-start items-center'>
                          <Circle className=' fill-[#EEFF61]'/>
                          <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                  <div className='w-[200px] h-[180px] bg-gray-200'>
                    <Image src='/gamepad.png' width={270} height={250} alt='Gamepad' />
                  </div>

                  <h3 className={`font-medium text-[14px] ${poppins.className}`}>GP11 Shooter USB Gamepad</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444] text-[14px]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>
                    </CarouselItem>
                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                  <div className='w-[200px] h-[180px] bg-gray-200'>
                    <Image src='/shirt.png' width={270} height={250} alt='Shirt' />
                  </div>

                  <h3 className={`font-medium text-[14px] ${poppins.className}`}>Quilted Satic Jacket</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444] text-[14px]'>$660</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(55)</p>
                  </div>

                  <div className='flex justify-start items-center'>
                    <Circle className=' fill-[#000]'/>
                    <Circle className=' fill-[#DB4444] text-[#DB4444]'/>

                  </div>
                </div>
                    </CarouselItem>
                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                  <div className='w-[200px] h-[180px] bg-gray-200'>
                    <Image src='/puppy.png' width={270} height={250} alt='Dog Food' />
                  </div>

                  <h3 className={`font-medium text-[14px] ${poppins.className}`}>Breed Dry Dog Food</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444] text-[14px]'>$100 </p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(35)</p>
                  </div>
                </div>
                    </CarouselItem>
                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                  <div className='w-[200px] h-[180px] bg-gray-200'>
                    <Image src='/canon.png' width={270} height={250} alt='Canon' />
                  </div>

                  <h3 className={`font-medium text-[14px] ${poppins.className}`}>CANON EOS DSLR Camera</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444] text-[14px]'>$360</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(95)</p>
                  </div>
                </div>
                    </CarouselItem>

                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                  <div className='w-[200px] h-[180px] bg-gray-200'>
                    <Image src='/laptop.png' width={270} height={250} alt='laptop' />
                  </div>

                  <h3 className={`font-medium text-[14px] ${poppins.className}`}>ASUS FHD Gaming Laptop</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444] text-[14px]'>$700</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(325)</p>
                  </div>
                </div>
                    </CarouselItem>

                    <CarouselItem className='flex justify-center items-center'>
                      <div className='w-[200px] flex flex-col gap-[6px]'>
                  <div className='w-[200px] h-[180px] bg-gray-200'>
                    <Image src='/items.png' width={270} height={250} alt='Product Set' />
                  </div>

                  <h3 className={`font-medium text-[14px] ${poppins.className}`}>Small BookSelf</h3>

                  

                  <div className='flex justify-start items-center gap-[6px]'>

                    <p className='text-[#DB4444] text-[14px]'>$500</p>

                    <div className='flex justify-start items-center gap-[2px]'>
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
                      <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
                    </div>

                    <p className='text-gray-400'>(65)</p>
                  </div>
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

export default Section5