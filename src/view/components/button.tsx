import { ComponentProps, forwardRef, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../shared/lib/cn'

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode
}

const buttonVariants = cva('flex items-center rounded-md gap-2 transition', {
  variants: {
    variant: {
      primary: 'bg-emerald-500 text-white hover:bg-emerald-500/90',
    },
    size: {
      md: 'h-10 px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
