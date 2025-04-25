import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardDescriptionProps extends ComponentProps<'p'> {
  children: ReactNode
}

export function CardDescription({
  children,
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      {...props}
      className={twMerge('text-sm font-medium text-zinc-300', className)}
    >
      {children}
    </p>
  )
}
