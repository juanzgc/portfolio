import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'


function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  return (
    <nav className="text-gray-300 font-mono px-3 p-4">
      {/* Mobile View */}
      <div className="flex w-full justify-between items-center md:hidden">
        <div className="flex items-center space-x-2">
          <button onClick={() => setToggleMobileMenu(t => !t)}className="inline-flex justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
            {
              toggleMobileMenu ? <XIcon className="h-7 w-7" aria-hidden="true" /> : <MenuIcon className="block h-7 w-7" aria-hidden="true" />
            }
          </button>
            
          <PortfolioHeader />
        </div>

        <div className="flex items-center space-x-4">
          <GithubLink />
          <LinkedInLink />
        </div>
      </div>

      {/* Tablet and Computers */}
      <div className="hidden md:flex w-full justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link href="/" passHref>
            <PortfolioHeader />
          </Link>
        </div>

        <div className="flex space-x-4">
          <NavItem href="/#projects" name="Projects" />
          <NavItem href="/#technologies" name="Technologies" />
          <NavItem href="/#about" name="About" />
          <NavItem href="/blog" name="Blog" />
        </div>

        <div className="flex items-center space-x-4">
          <GithubLink />
          <LinkedInLink />
        </div>
      </div>

      {/* Dropdown Menu - show/hide based on menu state */}
      {
        toggleMobileMenu && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#projects">
                {/* <a className="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Projects</a> */}
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Projects</a>
              </Link>
              <Link href="#technologies">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Technologies</a>
              </Link>
              <Link href="#about">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About</a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Blog</a>
              </Link>
            </div>
          </div>
        )
      }

    </nav>
  )
}

function PortfolioHeader() {
  return (
    <Link href="/" passHref>
      <a className="flex items-center cursor-pointer">
        <img className='w-32' src="/juanzg-dark.png" />
      </a>
    </Link>
  )
}

function GithubLink() {
  return (
    <Link href="https://github.com/juanzgc" passHref>
      <a><svg className="h-9 w-9 cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
    </Link>
  )
}

function LinkedInLink() {
  return (
    <Link href="https://www.linkedin.com/in/juanzgc/" passHref>
      <a><svg className="h-9 w-9 cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg></a>
    </Link>
  )
}

function NavItem({name, href, current}: {name: string, href: string, current?: boolean}) {
  return (
    <Link href={href}>
      <a className={`cursor-pointer text-gray-300 px-3 py-2 rounded-md text-md font-medium ${current ? `bg-gray-800 text-white` : 'hover:text-white hover:bg-gray-700'}`}>
        {name}
      </a>
    </Link>
  )
}
export default Header
