import * as React from 'react'

import { cn } from '@/lib/utils'
import { Label } from './label'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label>{label}</Label>

        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
            className,
            errorMessage && 'border-destructive',
          )}
          ref={ref}
          {...props}
        />

        {errorMessage && (
          <span className="text-sm flex text-destructive font-semibold">
            {errorMessage}
          </span>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
