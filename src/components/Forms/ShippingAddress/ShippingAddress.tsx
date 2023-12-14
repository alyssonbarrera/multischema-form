import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

export function ShippingAddress() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset
      className="space-y-4"
      data-testid="shipping-address-component-container"
    >
      <legend
        className="text-xl font-semibold mx-auto"
        data-testid="shipping-address-component-title"
      >
        Shipping address
      </legend>
      <Controller
        name="shippingAddress.address"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Address"
            errorMessage={errors?.shippingAddress?.address?.message}
            data-testid="shipping-address-component-address"
          />
        )}
      />
      <Controller
        name="shippingAddress.city"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="City"
            errorMessage={errors?.shippingAddress?.city?.message}
            data-testid="shipping-address-component-city"
          />
        )}
      />
      <Controller
        name="shippingAddress.state"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="State"
            errorMessage={errors?.shippingAddress?.state?.message}
            data-testid="shipping-address-component-state"
          />
        )}
      />
      <Controller
        name="shippingAddress.zipCode"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            inputMode="numeric"
            label="Zip code"
            errorMessage={errors?.shippingAddress?.zipCode?.message}
            data-testid="shipping-address-component-zip-code"
          />
        )}
      />
    </fieldset>
  )
}
