import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Logo from './Logo'
import { footerText, socials } from '@/constants'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
        <div className='w-full bg-primary  section_padding'>
            <div className='flex-center flex-col  gap-4' >
        <p className='text-white p-medium-18' >
  35,000+ already joined

        </p>
                <h2 className="p-medium-24 lg:h2-medium text-white text-center">
  Stay up-to-date with what  <br /> we're doing

                </h2>


                <div className="flex items-center gap-4 flex-wrap">
                    <Input className='min-w-[300px] focus-visible:ring-offset-0 border-none focus-visible:ring-transparent  focus:outline-none'  />
                    <Button className='bg-primary-red hover:bg-white hover:border-primary-red hover:border-2 transition-all duration-150 hover:text-primary-red'>Contact Us</Button>
                </div>

            </div>
        </div>
    

    <footer className=" w-full bg-secondary-darkBlue ">

      <div className="container flex-between py-6 flex-col gap-5 md:flex-row ">

            <div  className='flex items-center gap-4 flex-col md:flex-row' >
              <Logo />

      <div className="flex items-center gap-4 flex-col md:flex-row">
        
      {
                footerText.map((text) => (
                  <p key = {text} className='text-white/90 uppercase p-regular-18 cursor-pointer hover:text-primary-red' >{text}</p>
                ) ) 
              }
      </div>

            </div>


                <div className = "flex items-center gap-10" >
                  {
                    socials.map((social) => (
                      <Image className='object-contain'  key = {social}  src = {social} alt = "social" width = {25} height={25} />
                    ) )
                  }
                </div>

      </div>

    </footer>
    
    </>
  )
}

export default Footer