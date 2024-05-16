import { cta } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <section className = "section_padding">
            <div className="flex-center flex-col gap-4">
                <h2 className=" h3-bold md:h2-bold text-secondary-darkBlue whitespace-nowrap">
  Download the extension
                </h2>
                    <p className='p-medium-18 text-secondary-blue max-w-xl text-center' >
                    We've got more browsers in the pipeline. Please do let us know if you've 
  got a favourite you'd like us to prioritize.
                    </p>

            </div>


            <div className="flex-between flex-col lg:flex-row  max-w-3xl mx-auto mt-6  gap-8 lg:gap-14  ">
                    
                    {
                        cta.map((browser , i) => (
                            <div key = {browser.image} className={`flex flex-col gap-5 items-center shadow-lg  px-6 py-8 
                                    ${i === 1 && "lg:mt-[80px]" }
                                    ${i === 2 && "lg:mt-[100px]" }
                            
                            
                            `} >
                                <Image  src = {browser.image} alt= {browser.browser} width={100} height={100} className="object-contain"  />
                                          <div>
                                              <h5 className='p-bold-20 whitespace-nowrap text-secondary-darkBlue'>Add To {browser.browser}</h5>
                                              <p className='p-medium-16 text-secondary-blue  text-center whitespace-nowrap' >{browser.minVersion}</p>
                                          </div>


                                          <Image  src = {'/images/bg-dots.svg'} alt= {"dots"} width={300} height={100} />

                                        <Button >{browser.action}</Button>
                            </div>
                        ))
                    }

            </div>


    </section>
  )
}

export default CTA