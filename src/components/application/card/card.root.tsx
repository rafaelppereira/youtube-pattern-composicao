import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardRootProps extends ComponentProps<'div'> {
  children: ReactNode
}
export function CardRoot({ children, className, ...props }: CardRootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'w-[30rem] space-y-5 rounded-xl border-2 border-zinc-700 bg-zinc-800 p-5 shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}
