import {
  Button as ButtonElement,
  ButtonProps as ButtonElementProps,
} from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { Fragment } from 'react'

type ButtonProps = ButtonElementProps & {
  loading?: boolean
}

export function Button({ loading, ...props }: ButtonProps) {
  return (
    <ButtonElement {...props} disabled={props.disabled || loading}>
      {loading && (
        <Fragment>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Fragment>
      )}

      {!loading && props.children}
    </ButtonElement>
  )
}
