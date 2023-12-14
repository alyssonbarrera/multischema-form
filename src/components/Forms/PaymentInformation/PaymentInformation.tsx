import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

export function PaymentInformation() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset
      className="space-y-4"
      data-testid="payment-information-component-container"
    >
      <legend
        className="text-xl font-semibold mx-auto"
        data-testid="payment-information-component-title"
      >
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
              data-testid="payment-information-component-card-number"
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
              data-testid="payment-information-component-cardholder-name"
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
                data-testid="payment-information-component-expiration-date"
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
                data-testid="payment-information-component-cvv"
              />
            )}
          />
        </div>
      </div>
    </fieldset>
  )
}
