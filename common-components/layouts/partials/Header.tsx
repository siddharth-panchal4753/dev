'use client'

import Link from 'next/link'
import React, { Fragment, useEffect } from 'react'
import menu from '@/config/menu.json'

export interface INavigationLink {
  name: string
  url: string
}

const Header = () => {
  const { main }: { main: INavigationLink[] } = menu

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className="flex items-center gap-6 border border-solid rounded-full py-2 px-4">
      {main.map((menuItems, i) => (
        <Fragment key={`menu-${i}`}>
          <Link href={menuItems.url} className="font-bold text-lg">
            {menuItems.name}
          </Link>
        </Fragment>
      ))}
    </div>
  )
}

export default Header
