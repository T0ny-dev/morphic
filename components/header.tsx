'use client'

import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import Image from 'next/image'
import LoginLogout from './ui/loginLogout'
import { useTheme } from 'next-themes';

export const Header: React.FC = () => {

  const { theme } = useTheme();

  const imageSrc = theme === 'dark'
    ? '/nexus_mk_white.svg'
    : '/nexus_mk_white.svg';

  return (
    <header className="fixed w-full p-0 md:p-3 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="flex p-2 items-center">
        <Link href='/'>
          <Image src={imageSrc} alt="" width={35} height={35} />        </Link>
      </div>
      <div className='flex'>
        <LoginLogout />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
