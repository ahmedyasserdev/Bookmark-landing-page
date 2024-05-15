'use client'
import React from 'react'
import Logo from './Logo'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header className='flex-between relative py-7' 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    
    >
          <Logo />

        <div className='hidden lg:block' >
          <NavLinks />
        </div>


        <MobileNav />

    </motion.header>
  )
}

export default Header