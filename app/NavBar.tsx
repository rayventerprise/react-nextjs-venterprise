'use client'
import {useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
// @ts-ignore
import {List, X} from '@phosphor-icons/react/dist/ssr'
import classNames from 'classnames'
import Link from 'next/link'

export const NavBar = () => {
  const router = useRouter()

  const [popoverOpen, setPopoverOpen] = useState(false)

  const clickPopoverLink = (url: string) => {
    if ( url.startsWith('http') ) {
      window.open(url, '_blank')
    } else {
      router.push(url)
    }
    setPopoverOpen(false)
  }

  const [scrolling, setScrolling] = useState(false)

  /* This hides the name when we start scrolling to maximize visibility as the NavBar is sticky. */
  useEffect(() => {
    const onScrollHandle = () => {
      setScrolling(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    }

    window.addEventListener('scroll', onScrollHandle)

    return () => {
      window.removeEventListener('scroll', onScrollHandle)
    }
  }, [])

  return (<>
    <div
      className={classNames('w-full flex py-4 md:py-16 z-20 justify-between app-header items-end content-container sticky top-0')}
    >
      <div className='header-font text-lg'>
        <Link href="/" className={classNames('transition-opacity duration-500', { 'opacity-0': scrolling })}>
          RAYMOND VANDENBERG
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <button
            aria-label="Menu"
            className="btn shadow-md justify-center dark:bg-primary light:bg-white items-center flex px-4 py-2"
            onClick={() => setPopoverOpen(!popoverOpen)}
        >
          <List size={32} />
        </button>
      </div>
    </div>

    <AnimatePresence>
      {popoverOpen && (<motion.div
      className="w-full flex flex-col bg-[#1b1b1b] text-white items-center fixed top-0 left-0 h-full z-20"
      initial={{ opacity: 0, height: 0 }}
      exit={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '100%' }}
      transition={{ duration: .35 }}
    >
        <div className="content-container h-full w-full py-6">
          <div className="flex text-xl items-center justify-end">
            <button className="text-xl p-4 hover:bg-gray-300 hover:bg-opacity-10 transition duration-500 rounded"
                    onClick={() => setPopoverOpen(false)}>
              <X size={32}/>
            </button>
          </div>
          <button className="btn nav-button" onClick={() => clickPopoverLink('/')}>
            HOME
          </button>
          <button className="btn nav-button" onClick={() => clickPopoverLink('/about')}>
            ABOUT
          </button>
          <button className="btn nav-button" onClick={() => clickPopoverLink('/#projects')}>
            PROJECTS
          </button>
          <button className="btn nav-button" onClick={() => clickPopoverLink('/contact')}>
            CONTACT
          </button>
          <button className="btn nav-button" onClick={() => clickPopoverLink('https://github.com/rayventerprise')}>
            GITHUB
          </button>
          <button className="btn nav-button" onClick={() => clickPopoverLink('https://medium.com/@rayventerprise')}>
            ARTICLES
          </button>
        </div>
      </motion.div>)}
    </AnimatePresence>
  </>)
}
