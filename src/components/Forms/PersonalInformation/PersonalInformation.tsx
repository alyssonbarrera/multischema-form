import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

export function PersonalInformation() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>()

  return (
    <fieldset
      className="space-y-4"
      data-testid="personal-information-component-container"
    >
      <legend
        className="text-xl font-semibold mx-auto"
        data-testid="personal-information-component-title"
      >
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
            data-testid="personal-information-component-first-name"
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
            data-testid="personal-information-component-last-name"
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
            label="Phone"
            errorMessage={errors?.personalInformation?.phone?.message}
            data-testid="personal-information-component-phone"
          />
        )}
      />
    </fieldset>
  )
}
