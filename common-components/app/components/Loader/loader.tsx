import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const Loader: FC<{ className?: string }> = ({ className }): JSX.Element => {
  return (
    <div
      className={twMerge(`${className} inline-block h-4 w-4 animate-spin rounded-full border-[3px] 
      border-solid border-current border-r-transparent align-[-0.125em] 
      motion-reduce:animate-[spin_1.5s_linear_infinite]`)}
    />
  )
}

export default Loader
