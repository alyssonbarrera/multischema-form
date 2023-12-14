import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

export function PaymentInformation() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold mx-auto">
        Payment information
      </legend>
      <div className="space-y-4">
        <Controller
          name="paymentInformation.cardNumber"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              inputMode="numeric"
              label="Card number"
              errorMessage={errors?.paymentInformation?.cardNumber?.message}
            />
          )}
        />
        <Controller
          name="paymentInformation.cardholderName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Cardholder name"
              errorMessage={errors?.paymentInformation?.cardholderName?.message}
            />
          )}
        />
        <div className="flex space-x-4">
          <Controller
            name="paymentInformation.expirationDate"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="Expiration date"
                errorMessage={
                  errors?.paymentInformation?.expirationDate?.message
                }
              />
            )}
          />
          <Controller
            name="paymentInformation.cvv"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                inputMode="numeric"
                label="CVV"
                errorMessage={errors?.paymentInformation?.cvv?.message}
              />
            )}
          />
        </div>
      </div>
    </fieldset>
  )
}
