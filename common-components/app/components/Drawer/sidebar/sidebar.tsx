import React, { FC, useEffect, useRef, useState } from 'react'
import Button from '../../Buttons/page'

export interface IDrawerProps {
  title: string
  isDrawerOpen: boolean
  setDrawerOpen: () => void
  children?: React.ReactNode
}

const SideBar: FC<IDrawerProps> = ({ title, isDrawerOpen, setDrawerOpen, children }): JSX.Element => {
  const [contentHeight, setContentHeight] = useState<number>(window.innerHeight - 60)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isDrawerOpen])

  useEffect(() => {
    function handleResize() {
      setContentHeight(window.innerHeight - 60)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div
        className={`${isDrawerOpen ? 'flex' : 'hidden'} absolute inset-0 w-full h-full 
        pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm`}
        onClick={setDrawerOpen}
      />
      <div
        className={`fixed z-[9999] pointer-events-auto bg-white box-border w-full shadow-2xl 
        shadow-blue-gray-900/10 top-0 left-0 h-full w-[360px] max-h-screen transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="border-b border-solid p-4 flex items-center justify-between">
          {title}
          <Button onClick={setDrawerOpen} variant="text" className="py-0 px-1">
            <i className="ri-close-line text-2xl" />
          </Button>
        </div>
        <div ref={contentRef} className="p-4 overflow-y-auto" style={{ maxHeight: contentHeight }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default SideBar
