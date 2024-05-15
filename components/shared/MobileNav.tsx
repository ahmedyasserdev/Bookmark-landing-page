import {
    Sheet,
    SheetContent,
    
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import NavLinks from "./NavLinks"
  import { Menu } from "lucide-react"
  const MobileNav = () => {
  return (
   <nav className = "lg:hidden " >
     <Sheet>
     <SheetTrigger className="align-middle" >
        <Menu />
     </SheetTrigger>
     <SheetContent className = "flex flex-col gap-6 bg-secondary-darkBlue lg:hidden  pt-14 border-l border-secondary-darkBlue " >

            <NavLinks />
     </SheetContent>
    </Sheet>
    
   </nav>
  )
  }
  
  export default MobileNav