import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardFooterProps extends ComponentProps<'footer'> {
  children: ReactNode
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <footer
      {...props}
      className={twMerge('flex items-center justify-end gap-2', className)}
    >
      {children}
    </footer>
  )
}
