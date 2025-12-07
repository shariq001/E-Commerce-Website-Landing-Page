import React from 'react'
import { Poppins } from "next/font/google";
import { Facebook, Instagram, LinkedinIcon, SendHorizonal, Twitter } from 'lucide-react';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Footer = () => {
  return (
    <div>
        <div className='2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] py-[70px] bg-black text-white flex lg:flex-row xs:flex-col xs:items-center xs:gap-[40px] lg:justify-between lg:items-start'>
        
            {/* 1 */}
            <div className='flex flex-col gap-[15px] xs:items-center lg:items-start'>
                <p className='font-bold text-[24px]'>Exclusive</p>
                <p className={`text-[20px] font-medium ${poppins.className}`}>Subscribe</p>
                <p className={`${poppins.className}`}>Get 10% off your first order</p>
                <div className='w-[217px] h-[48px] flex justify-between items-center border-[2px] border-white '>
                    <input type="email" placeholder='Enter your email' className='outline-none border-none px-[10px] w-[150px]' />
                    <div className='hover:bg-white cursor-pointer h-[48px] flex items-center justify-center hover:text-black px-[7px]'>
                        <button title='Sent' className='cursor-pointer'>
                        <SendHorizonal className=''/>
                    </button>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className={`flex flex-col gap-[15px] xs:items-center lg:items-start ${poppins.className}`}>
                <p className={` text-[20px] font-medium`}>Support</p>
                <p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>

            {/* 3 */}
            <div className={`flex flex-col gap-[15px] xs:items-center lg:items-start ${poppins.className}`}>
                <p className={` text-[20px] font-medium`}>Account</p>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>

            {/* 4 */}
            <div className={`flex flex-col gap-[15px] xs:items-center lg:items-start ${poppins.className}`}>
                <p className={` text-[20px] font-medium`}>Quick Link</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>

            {/* 5 */}
            <div className={`flex flex-col gap-[10px] xs:items-center lg:items-start ${poppins.className} lg:hidden xl:flex`}>
                <p className={` text-[20px] font-medium`}>Download App</p>
                <p className='text-[12px] text-[#FAFAFA]'>Save $3 with App New User Only</p>

                <div className='flex lg:flex-row xs:flex-col xs:items-center justify-start items-center gap-[10px]'>

                    <div className='bg-white w-[80px] h-[80px] flex justify-center items-center'>
                        <Image src='/qr.jpg' width={76} height={76} alt='QR Code'  className=''/>
                    </div>

                    <div className='flex flex-col gap-[15px]'>
                        <div className='flex justify-start items-center gap-[5px] border-white border-[1px] p-[6px] rounded-[10px]'>
                            <Image src='/playimage.png' width={40} height={40} alt='Play Store' />
                            <p>GET IT ON <br /> <span className='font-semibold text-[20px]'>Google Play</span></p>

                        </div>

                        <div className='flex justify-start items-center gap-[5px] border-white border-[1px] p-[8px] rounded-[10px]'>
                            <Image src='/appstore.png' width={40} height={40} alt='Play Store' className=''/>
                            <p>Download on the <br /> <span className='font-semibold text-[20px]'>App Store</span></p>

                        </div>
                        
                    </div>
                </div>

                <div className='flex justify-start items-center gap-[40px]'>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <LinkedinIcon />
                </div>
                
            </div>

            
        </div>

        <div className='flex justify-center items-center bg-black text-white 2xl:px-[100px] xl:px-[80px] lg:px-[60px] md:px-[30px] xs:px-[10px] pb-[50px] pt-[0px] xs:hidden lg:flex xl:hidden'>
            <div className={`flex flex-col gap-[10px] xs:items-center lg:items-center ${poppins.className} `}>
                <p className={` text-[20px] font-medium`}>Download App</p>
                <p className='text-[12px] text-[#FAFAFA]'>Save $3 with App New User Only</p>

                <div className='flex lg:flex-col  justify-start items-center gap-[10px]'>

                    <div className='bg-white w-[80px] h-[80px] flex justify-center items-center'>
                        <Image src='/qr.jpg' width={76} height={76} alt='QR Code'  className=''/>
                    </div>

                    <div className='flex flex-col gap-[15px]'>
                        <div className='flex justify-start items-center gap-[5px] border-white border-[1px] p-[6px] rounded-[10px]'>
                            <Image src='/playimage.png' width={40} height={40} alt='Play Store' />
                            <p>GET IT ON <br /> <span className='font-semibold text-[20px]'>Google Play</span></p>

                        </div>

                        <div className='flex justify-start items-center gap-[5px] border-white border-[1px] p-[8px] rounded-[10px]'>
                            <Image src='/appstore.png' width={40} height={40} alt='Play Store' className=''/>
                            <p>Download on the <br /> <span className='font-semibold text-[20px]'>App Store</span></p>

                        </div>
                        
                    </div>
                </div>

                <div className='flex justify-start items-center gap-[40px]'>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <LinkedinIcon />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer