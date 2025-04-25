import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardContentProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function CardContent({
  children,
  className,
  ...props
}: CardContentProps) {
  return (
    <div {...props} className={twMerge('space-y-5', className)}>
      {children}
    </div>
  )
}
