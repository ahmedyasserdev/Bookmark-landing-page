'use client'
import { features, variantsX } from "@/constants"
import Image from "next/image";
import { useState } from "react"
import { Button } from "../ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import{motion} from "framer-motion"
const Features = () => {
    const [index , setIndex ] = useState(0);
    const { ref, controls, delay } = useScrollAnimation();
  const currentFeature = features[index];


  return (
    <section className="section_padding" >
      <div className="flex-center flex-col gap-5 " >

    <h4 className="h4-bold" >  Features</h4>

      <p className="text-center text-secondary-blue   max-w-lg" >
      Our aim is to make it quick and easy for you to access your favourite websites. 
Your bookmarks sync between your devices so you can access them on the go.
      </p>

      </div>


     <div className="flex-center flex-col lg:flex-row  cursor-pointer  gap-y-5 lg:gap-10  mt-10  lg:mr-10 " >
       {
         features.map((feature  , i) => (
           <h5 className={`  p-medium-18 lg:p-medium-24   text-secondary-blue text-center ${index === i && "border-b-[3px] border-primary-red  "}`} key = {feature.title} 
            onClick={ () => {
              setIndex(i);
            }}
           
           >{feature.title}</h5>
         ) )
       }
     </div>


        <div  className="flex-between flex-col lg:flex-row  gap-y-20 lg:gap-x-20 mt-14" >

        <motion.div className="relative   lg:w-1/2" 
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variantsX}
              transition={{ duration: 0.8 }}
            >
                <Image 
                    src = {currentFeature.image}
                    alt = {currentFeature.subTitle}
                  width = {500}
                  height={300}
                />

                <div  className="absolute  bottom-[-20px] lg:bottom-[-80px]   w-[700px]  h-[180px] md:h-[280px] rounded-br-[150px]  rounded-tr-[50px] bg-primary   -z-[2]   left-[-500px] lg:left-[-300px]" />


            </motion.div>



            <motion.div className="flex flex-col max-lg:text-center  gap-4 lg:w-1/2" 
             ref={ref}
             initial="hidden"
             animate={controls}
             variants={variantsX}
             transition={{ duration: 0.8 }}
            
            >
        <h2  className="h2-bold">{currentFeature.subTitle}</h2>
          <p className="p-medium-18 text-secondary-blue " > {currentFeature.moreInfo}</p>
          <Button className="lg:w-fit">More Info</Button>
            </motion.div>


        </div>


       


    </section>
  )
}

export default Features