import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardIconProps {
  icon: ElementType
  className?: string
}

export function CardIcon({ icon: Icon, className }: CardIconProps) {
  return <Icon className={twMerge('size-4 text-white', className)} />
}
