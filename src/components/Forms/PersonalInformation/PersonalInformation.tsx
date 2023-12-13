import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

export function PersonalInformation() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold mx-auto">
        Personal information
      </legend>
      <Controller
        name="personalInformation.firstName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="First name"
            errorMessage={errors?.personalInformation?.firstName?.message}
          />
        )}
      />
      <Controller
        name="personalInformation.lastName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Last name"
            errorMessage={errors?.personalInformation?.lastName?.message}
          />
        )}
      />
      <Controller
        name="personalInformation.phone"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="tel"
            inputMode="numeric"
            label="Phone"
            errorMessage={errors?.personalInformation?.phone?.message}
          />
        )}
      />
    </fieldset>
  )
}
