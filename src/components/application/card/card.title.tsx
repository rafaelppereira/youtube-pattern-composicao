import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardTitleProps extends ComponentProps<'h1'> {
  children: ReactNode
}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h1
      {...props}
      className={twMerge('text-2xl font-bold tracking-tight', className)}
    >
      {children}
    </h1>
  )
}
