import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Section2 = () => {
  return (
    <div className='flex justify-start items-center gap-[40px] 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] my-[30px] overflow-x-auto scroll-smooth no-scrollbar py-[30px] '>

        {/* 1 */}
        <div className='w-[270px] flex flex-col gap-[6px]'>
          <div className='w-[270px] h-[250px] bg-gray-200'>
            <Image src='/pic1.png' width={270} height={250} alt='GamePad' />
          </div>

          <h3 className={`font-medium ${poppins.className}`}>HAVIT HV-G92 Gamepad</h3>

          <p className='text-[#DB4444]'>$120 <s className='text-gray-400'> $160</s></p>

          <div className='flex justify-start items-center gap-[6px]'>
            <div className='flex justify-start items-center gap-[2px]'>
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
            </div>

            <p className='text-gray-400'>(88)</p>
          </div>
        </div>

        {/* 2 */}
        <div className='w-[270px] flex flex-col gap-[6px]'>
          <div className='w-[270px] h-[250px] bg-gray-200'>
            <Image src='/pic2.png' width={270} height={250} alt='Keyboard' />
          </div>

          <h3 className={`font-medium ${poppins.className}`}>AK-900 Wired Keyboard</h3>

          <p className='text-[#DB4444]'>$960 <s className='text-gray-400'> $1160</s></p>

          <div className='flex justify-start items-center gap-[6px]'>
            <div className='flex justify-start items-center gap-[2px]'>
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
            </div>

            <p className='text-gray-400'>(75)</p>
          </div>
        </div>

        {/* 3 */}
        <div className='w-[270px] flex flex-col gap-[6px]'>
          <div className='w-[270px] h-[250px] bg-gray-200'>
            <Image src='/pic3.png' width={270} height={250} alt='PC' />
          </div>

          <h3 className={`font-medium ${poppins.className}`}>IPS LCD Gaming Monitor</h3>

          <p className='text-[#DB4444]'>$370 <s className='text-gray-400'> $400</s></p>

          <div className='flex justify-start items-center gap-[6px]'>
            <div className='flex justify-start items-center gap-[2px]'>
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
            </div>

            <p className='text-gray-400'>(99)</p>
          </div>
        </div>

        {/* 4 */}
        <div className='w-[270px] flex flex-col gap-[6px]'>
          <div className='w-[270px] h-[250px] bg-gray-200'>
            <Image src='/pic4.png' width={270} height={250} alt='Chair' />
          </div>

          <h3 className={`font-medium ${poppins.className}`}>S-Series Comfort Chair</h3>

          <p className='text-[#DB4444]'>$375 <s className='text-gray-400'> $400</s></p>

          <div className='flex justify-start items-center gap-[6px]'>
            <div className='flex justify-start items-center gap-[2px]'>
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33]  size-[18px]" />
            </div>

            <p className='text-gray-400'>(88)</p>
          </div>
        </div>

        {/* 5 */}
        <div className='w-[270px] flex flex-col gap-[6px]'>
          <div className='w-[270px] h-[250px] bg-gray-200'>
            <Image src='/pic1.png' width={270} height={250} alt='GamePad' />
          </div>

          <h3 className={`font-medium ${poppins.className}`}>HAVIT HV-G92 Gamepad</h3>

          <p className='text-[#DB4444]'>$120 <s className='text-gray-400'> $160</s></p>

          <div className='flex justify-start items-center gap-[6px]'>
            <div className='flex justify-start items-center gap-[2px]'>
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
            </div>

            <p className='text-gray-400'>(88)</p>
          </div>
        </div>

        {/* 6 */}
        <div className='w-[270px] flex flex-col gap-[6px]'>
          <div className='w-[270px] h-[250px] bg-gray-200'>
            <Image src='/pic2.png' width={270} height={250} alt='Keyboard' />
          </div>

          <h3 className={`font-medium ${poppins.className}`}>AK-900 Wired Keyboard</h3>

          <p className='text-[#DB4444]'>$960 <s className='text-gray-400'> $1160</s></p>

          <div className='flex justify-start items-center gap-[6px]'>
            <div className='flex justify-start items-center gap-[2px]'>
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#FFAD33] fill-[#FFAD33] size-[18px]" />
              <Star className="text-[#a3a3a3] fill-[#a3a3a3] size-[18px]" />
            </div>

            <p className='text-gray-400'>(75)</p>
          </div>
        </div>
      </div>
  )
}

export default Section2