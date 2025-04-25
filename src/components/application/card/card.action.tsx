import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const cardActionVariants = cva(
  'flex items-center gap-2 rounded-md  px-4 py-2 text-sm font-semibold  transition-all hover:brightness-75',
  {
    variants: {
      variant: {
        destructive: 'bg-rose-500 text-white',
        default: 'bg-primary text-primary-foreground',
        outline: 'bg-transparent border border-zinc-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface CardActionProps
  extends ComponentProps<'button'>,
    VariantProps<typeof cardActionVariants> {
  children: ReactNode
}

export function CardAction({
  variant,
  children,
  className,
  ...props
}: CardActionProps) {
  return (
    <button
      {...props}
      className={twMerge(cardActionVariants({ variant, className }))}
    >
      {children}
    </button>
  )
}
