import { render, renderHook, screen } from '@testing-library/react'
import { PersonalInformation } from '@/components/Forms/PersonalInformation'
import { FormProvider, useForm } from 'react-hook-form'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

describe('Form PersonalInformation Component', () => {
  beforeEach(() => {
    const useFormMethods = renderHook(() =>
      useForm<RegistrationFormSchemaProps>(),
    ).result.current

    render(
      <FormProvider {...useFormMethods}>
        <PersonalInformation />
      </FormProvider>,
    )
  })

  it('should be able to render the personal information component correctly', () => {
    const personalInformationContainerElement = screen.getByTestId(
      'personal-information-component-container',
    )
    const personalInformationTitleElement = screen.getByTestId(
      'personal-information-component-title',
    )
    const personalInformationFirstNameElement = screen.getByTestId(
      'personal-information-component-first-name',
    )
    const personalInformationLastNameElement = screen.getByTestId(
      'personal-information-component-last-name',
    )
    const personalInformationPhoneElement = screen.getByTestId(
      'personal-information-component-phone',
    )
    const inputComponentErrorMessageElement = screen.queryByTestId(
      'input-component-error-message',
    )

    expect(personalInformationContainerElement).toBeInTheDocument()

    expect(personalInformationTitleElement).toBeInTheDocument()
    expect(personalInformationTitleElement).toHaveTextContent(
      'Personal information',
    )

    expect(personalInformationFirstNameElement).toBeInTheDocument()
    expect(personalInformationFirstNameElement).toHaveAttribute('type', 'text')

    expect(personalInformationLastNameElement).toBeInTheDocument()
    expect(personalInformationLastNameElement).toHaveAttribute('type', 'text')

    expect(personalInformationPhoneElement).toBeInTheDocument()
    expect(personalInformationPhoneElement).toHaveAttribute('type', 'tel')

    expect(inputComponentErrorMessageElement).not.toBeInTheDocument()
  })
})
