'use client'

import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import LoginLogout from './ui/loginLogout'
import { useTheme } from 'next-themes';

export const Header: React.FC = () => {

  const { theme } = useTheme();

  const imageSrc = theme === 'dark'
    ? 'https://firebasestorage.googleapis.com/v0/b/nexus-marketing-ia.appspot.com/o/nexus_mk_white.svg?alt=media&token=9ee82247-ff9c-4b48-95ee-402af07b4d98'
    : 'https://firebasestorage.googleapis.com/v0/b/nexus-marketing-ia.appspot.com/o/nexus_mk_white.svg?alt=media&token=9ee82247-ff9c-4b48-95ee-402af07b4d98';

  return (
    <header className="fixed w-full p-0 md:p-3 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="flex p-2 items-center">
        <a href='/'>
          <img src={imageSrc} alt="" style={{ width: "35px" }} />
        </a>
      </div>
      <div className='flex'>
        <LoginLogout />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
