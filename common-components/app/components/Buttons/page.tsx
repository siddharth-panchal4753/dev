'use client'

import Link from 'next/link'
import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import Loader from '../Loader/loader'

interface ButtonProps {
  variant?: 'default' | 'outline' | 'text' | 'link'
  color?: string
  borderColor?: string
  borderRadius?: string
  size?: 'sm' | 'md' | 'lg'
  nextLink?: boolean
  targetBlank?: boolean
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  icon?: React.ReactNode
  className?: React.ReactNode
  iconPlacement?: 'left' | 'right'
  onClick?: () => void
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  color = 'bg-primary',
  borderColor = 'border-primary',
  borderRadius = 'rounded-md',
  nextLink = false,
  targetBlank = false,
  disabled = false,
  iconPlacement = 'left',
  icon = false,
  loading = false,
  size = 'md',
  className,
  children,
  onClick,
  href,
}: ButtonProps): JSX.Element => {
  const buttonSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  }

  const baseButtonClasses = `text-white ${borderRadius} ${buttonSize[size]}`
  const iconClasses = 'flex items-center'

  const buttonClasses = twMerge(
    {
      default: `${color} ${iconClasses} ${baseButtonClasses} hover:opacity-80`,
      outline: `${borderColor} ${iconClasses} ${borderRadius} ${baseButtonClasses} border border-solid bg-transparent text-primary hover:bg-primary hover:text-white`,
      text: `${color} ${iconClasses} ${baseButtonClasses} hover:bg-hoverBg bg-transparent text-primary`,
      link: `${color} ${iconClasses} hover:underline bg-transparent text-primary`,
    }[variant] || `${color} ${iconClasses} ${baseButtonClasses}`
  )

  return (
    <>
      {nextLink && href ? (
        <Link
          href={href}
          className={twMerge(`font-medium flex items-center justify-center ${buttonClasses}`)}
          target={targetBlank ? '_blank' : undefined}
        >
          {children}
          {icon && icon}
        </Link>
      ) : (
        <button
          className={twMerge(
            `transition-all ease duration-200 font-medium ${buttonClasses} ${
              disabled && 'disabled:cursor-not-allowed disabled:opacity-25 focus:outline-none'
            } ${className}`
          )}
          onClick={onClick}
          disabled={disabled || loading}
        >
          {icon && iconPlacement === 'right' ? (
            <>
              {icon}
              {children}
            </>
          ) : icon ? (
            <>
              {children}
              {icon}
            </>
          ) : (
            <>
              {loading && <Loader />}
              {children}
            </>
          )}
        </button>
      )}
    </>
  )
}

export default Button
