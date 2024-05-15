'use client'
import Image from "next/image"
import { Button } from "../ui/button"
import {motion} from "framer-motion"
import { variantsX } from "@/constants"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
const Hero = () => {
    const { ref, controls, delay } = useScrollAnimation();
    return (
    <section className="section_padding">
        <div className="flex-between flex-col-reverse lg:flex-row gap-10">
        <motion.div className="flex flex-col gap-6 lg:w-1/2  max-lg:text-center" 
         ref={ref}
         initial="hidden"
         animate={controls}
         variants={variantsX}
         transition={{ duration: 0.8 }}
        
        >
            <h1 className="text-secondary-darkBlue h2-bold  whitespace-nowrap" >
  A Simple Bookmark <br /> Manager

            </h1>

            <p className="p-regular-18 text-secondary-blue">
            A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.
            </p>

            <div className="flex-center gap-4" >
                        <Button className="px-8 py-3" >
  Get it on Chrome

                        </Button>
                        <Button variant={"ghost"} className="bg-white shadow-md px-8 py-4  text-secondary-darkBlue/70  font-bold " >
                        Get it on Firefox


                        </Button>


                 </div>


        </motion.div>

            <motion.div className="relative " 
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variantsX}
              transition={{ duration: 0.8 }}
            >
                <Image 
                    src = "/images/illustration-hero.svg"
                    alt = "illustration-hero"
                  width = {1000}
                  height={600}
                />

                <div  className="absolute bottom-0   w-[300px] md:w-full  h-[180px] md:h-[280px] rounded-bl-[150px]  rounded-tl-[50px] bg-primary   -z-[2]   right-[-120px] lg:right-[-200px]" />


            </motion.div>


        </div>

    </section>
  )
}

export default Hero