import { render, renderHook, screen } from '@testing-library/react'
import { PaymentInformation } from '@/components/Forms/PaymentInformation'
import { FormProvider, useForm } from 'react-hook-form'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

describe('Form PaymentInformation Component', () => {
  beforeEach(() => {
    const useFormMethods = renderHook(() =>
      useForm<RegistrationFormSchemaProps>(),
    ).result.current

    render(
      <FormProvider {...useFormMethods}>
        <PaymentInformation />
      </FormProvider>,
    )
  })

  it('should be able to render the payment information component correctly', () => {
    const paymentInformationContainerElement = screen.getByTestId(
      'payment-information-component-container',
    )
    const paymentInformationTitleElement = screen.getByTestId(
      'payment-information-component-title',
    )
    const paymentInformationCardNumberElement = screen.getByTestId(
      'payment-information-component-card-number',
    )
    const paymentInformationCardholderNameElement = screen.getByTestId(
      'payment-information-component-cardholder-name',
    )
    const paymentInformationExpirationDateElement = screen.getByTestId(
      'payment-information-component-expiration-date',
    )
    const paymentInformationCvvElement = screen.getByTestId(
      'payment-information-component-cvv',
    )

    const inputComponentErrorMessageElement = screen.queryByTestId(
      'input-component-error-message',
    )

    expect(paymentInformationContainerElement).toBeInTheDocument()

    expect(paymentInformationTitleElement).toBeInTheDocument()
    expect(paymentInformationTitleElement).toHaveTextContent(
      'Payment information',
    )

    expect(paymentInformationCardNumberElement).toBeInTheDocument()
    expect(paymentInformationCardNumberElement).toHaveAttribute(
      'type',
      'number',
    )

    expect(paymentInformationCardholderNameElement).toBeInTheDocument()
    expect(paymentInformationCardholderNameElement).toHaveAttribute(
      'type',
      'text',
    )

    expect(paymentInformationExpirationDateElement).toBeInTheDocument()
    expect(paymentInformationExpirationDateElement).toHaveAttribute(
      'type',
      'text',
    )

    expect(paymentInformationCvvElement).toBeInTheDocument()
    expect(paymentInformationCvvElement).toHaveAttribute('type', 'number')

    expect(inputComponentErrorMessageElement).not.toBeInTheDocument()
  })
})
