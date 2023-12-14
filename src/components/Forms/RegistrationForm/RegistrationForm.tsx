import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/Forms/Button'

import { ShippingAddress } from '@/components/Forms/ShippingAddress'
import { PaymentInformation } from '@/components/Forms/PaymentInformation'
import { PersonalInformation } from '@/components/Forms/PersonalInformation'

import {
  RegistrationFormSchemaProps,
  RegistrationFormTypeEnum,
  registrationFormSchema,
} from '@/validations/registrationForm'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

export function RegistrationForm() {
  const { toast } = useToast()

  const formMethods = useForm<RegistrationFormSchemaProps>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      formType: RegistrationFormTypeEnum.PersonalInformation,
    },
  })

  const {
    watch,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods

  const formType = watch('formType')
  const formTypeIsPersonalInformation = formType === 'personalInformation'
  const formTypeIsShippingAddress = formType === 'shippingAddress'
  const formTypeIsPaymentInformation = formType === 'paymentInformation'

  function setFormType(formType: RegistrationFormTypeEnum) {
    formMethods.setValue('formType', formType)
  }

  function handleNextFormType() {
    switch (formType) {
      case 'personalInformation':
        setFormType(RegistrationFormTypeEnum.ShippingAddress)
        break
      case 'shippingAddress':
        setFormType(RegistrationFormTypeEnum.PaymentInformation)
        break
      case 'paymentInformation':
        console.log('submit', getValues())

        toast({
          title: 'Successfully registered!',
          description: 'Your registration has been successfully submitted.',
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
        break
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form
        className="space-y-4 basis-[400px] h-max mx-auto p-6 bg-white flex flex-col justify-center transform rounded-md shadow-lg"
        onSubmit={handleSubmit(handleNextFormType)}
        data-testid="registration-form-component-container"
      >
        {formTypeIsPersonalInformation && <PersonalInformation />}
        {formTypeIsShippingAddress && <ShippingAddress />}
        {formTypeIsPaymentInformation && <PaymentInformation />}

        <Button
          type="submit"
          className="w-full self-center"
          loading={isSubmitting}
          data-testid="registration-form-component-submit-button"
        >
          {formTypeIsPaymentInformation ? 'Submit' : 'Next'}
        </Button>
      </form>
    </FormProvider>
  )
}
