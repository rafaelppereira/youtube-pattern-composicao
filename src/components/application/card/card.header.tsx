import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardHeaderProps extends ComponentProps<'header'> {
  children: ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <header {...props} className={twMerge('flex flex-col gap-2', className)}>
      {children}
    </header>
  )
}
