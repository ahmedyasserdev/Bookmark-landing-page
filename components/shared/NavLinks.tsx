import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const NavLinks = () => {
  return (
    <nav className='flex flex-col  lg:flex-row items-center gap-8 w-full' >
    {
      navLinks.map((link) => (
        <Link href={link.route} key={link.lable} className='nav_link' >
          {link.lable}
        </Link>
      ) )
    }


    <Button  className = " max-lg:w-[70%] max-lg:bg-transparent max-lg:border-2 max-lg:border-secondary-blue   lg:bg-primary-red  uppercase lg:hover:text-primary-red  px-8 py-3 hover:bg-transparent tracking-wider lg:hover:border lg:hover:border-primary-red transition-all duration-150 " >Login</Button>

    </nav>
  )
}

export default NavLinks