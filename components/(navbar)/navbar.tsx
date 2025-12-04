"use client"
import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { useState  } from 'react'
import { useScroll , motion } from 'motion/react';
import Image from 'next/image'
import { nav } from 'motion/react-client'



const NavBar = () => {
  const navItems = [
        {name: 'About', link: '/about'},
        {name: 'Projects', link: '/projects'},
        {name: 'Contact', link: '/contact'},
        {name: 'Blog', link: '/blog'},
    ];
    const [hovered, setHovered] = useState<number | null>(null);
    const {scrollY} = useScroll();

      return (
        <div className='fixed top-3 gap-3 h-15 w-full flex max-w-4xl inset-x-0 mx-auto backdrop-blur-md items-center justify-center rounded-full border z-30 '>
          <div className='flex justify-between gap-4 items-center'>
            <div className=''>
          </div>
          <div className='flex pr-130 '>
            <Link href='/'>
              <div className="text-2xl font-semibold tracking-tight">Logo</div>
            </Link>
           
          </div>
            <div className='flex space-x-4 font-semibold'>
              {navItems.map((item, idx)=>(
                <Link href={item.link} key={idx}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        // </motion.div>
      
  )
}

export default NavBar