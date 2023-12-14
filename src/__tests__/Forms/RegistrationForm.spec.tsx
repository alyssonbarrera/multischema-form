import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { RegistrationForm } from '@/components/Forms/RegistrationForm'

function fillPersonalInformationForm() {
  const personalInformationFirstNameElement = screen.getByTestId(
    'personal-information-component-first-name',
  )
  const personalInformationLastNameElement = screen.getByTestId(
    'personal-information-component-last-name',
  )
  const personalInformationPhoneElement = screen.getByTestId(
    'personal-information-component-phone',
  )

  fireEvent.change(personalInformationFirstNameElement, {
    target: { value: 'John' },
  })

  fireEvent.change(personalInformationLastNameElement, {
    target: { value: 'Doe' },
  })

  fireEvent.change(personalInformationPhoneElement, {
    target: { value: '123456789' },
  })
}

function fillShippingAddressForm() {
  const shippingAddressAddressElement = screen.getByTestId(
    'shipping-address-component-address',
  )
  const shippingAddressCityElement = screen.getByTestId(
    'shipping-address-component-city',
  )
  const shippingAddressStateElement = screen.getByTestId(
    'shipping-address-component-state',
  )
  const shippingAddressZipCodeElement = screen.getByTestId(
    'shipping-address-component-zip-code',
  )

  fireEvent.change(shippingAddressAddressElement, {
    target: { value: 'Street 1' },
  })

  fireEvent.change(shippingAddressCityElement, {
    target: { value: 'City 1' },
  })

  fireEvent.change(shippingAddressStateElement, {
    target: { value: 'State 1' },
  })

  fireEvent.change(shippingAddressZipCodeElement, {
    target: { value: '123456' },
  })
}

function fillPaymentInformationForm() {
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

  fireEvent.change(paymentInformationCardNumberElement, {
    target: { value: '123456789' },
  })

  fireEvent.change(paymentInformationCardholderNameElement, {
    target: { value: 'John Doe' },
  })

  fireEvent.change(paymentInformationExpirationDateElement, {
    target: { value: '12/2023' },
  })

  fireEvent.change(paymentInformationCvvElement, {
    target: { value: '123' },
  })
}

const mockToastFunction = vi.fn()
vi.mock('@/components/ui/use-toast', () => ({
  useToast: () => ({
    toast: mockToastFunction,
  }),
}))

describe('Form RegistrationForm Component', () => {
  beforeEach(() => {
    render(<RegistrationForm />)
  })

  it('should be able to render the registration form component correctly', () => {
    const registrationFormContainerElement = screen.getByTestId(
      'registration-form-component-container',
    )
    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )
    const inputComponentErrorMessageElement = screen.queryAllByTestId(
      'input-component-error-message',
    )

    expect(registrationFormContainerElement).toBeInTheDocument()

    expect(registrationFormSubmitButtonElement).toBeInTheDocument()
    expect(registrationFormSubmitButtonElement).toHaveAttribute(
      'type',
      'submit',
    )
    expect(registrationFormSubmitButtonElement).toHaveTextContent('Next')

    expect(inputComponentErrorMessageElement).toHaveLength(0)
  })

  it('should be able to render the registration form component correctly with personal information form', () => {
    const personalInformationContainerElement = screen.getByTestId(
      'personal-information-component-container',
    )
    const shippingAddressContainerElement = screen.queryByTestId(
      'shipping-address-component-container',
    )
    const paymentInformationContainerElement = screen.queryByTestId(
      'payment-information-component-container',
    )

    expect(personalInformationContainerElement).toBeInTheDocument()

    expect(shippingAddressContainerElement).not.toBeInTheDocument()
    expect(paymentInformationContainerElement).not.toBeInTheDocument()
  })

  it('should be able to submit the personal information form when all fields are filled correctly and submit button is clicked', async () => {
    fillPersonalInformationForm()

    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      const personalInformationContainerElement = screen.queryByTestId(
        'personal-information-component-container',
      )
      const shippingAddressContainerElement = screen.getByTestId(
        'shipping-address-component-container',
      )

      expect(personalInformationContainerElement).not.toBeInTheDocument()
      expect(shippingAddressContainerElement).toBeInTheDocument()
    })
  })

  it('should be able to render the registration form component correctly with shipping address form', async () => {
    fillPersonalInformationForm()

    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      const shippingAddressContainerElement = screen.getByTestId(
        'shipping-address-component-container',
      )
      const paymentInformationContainerElement = screen.queryByTestId(
        'payment-information-component-container',
      )

      expect(shippingAddressContainerElement).toBeInTheDocument()
      expect(paymentInformationContainerElement).not.toBeInTheDocument()
    })
  })

  it('should be able to submit the shipping address form when all fields are filled correctly and submit button is clicked', async () => {
    fillPersonalInformationForm()

    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      fillShippingAddressForm()
      fireEvent.click(registrationFormSubmitButtonElement)
    })

    const shippingAddressContainerElement = screen.queryByTestId(
      'shipping-address-component-container',
    )
    const paymentInformationContainerElement = screen.getByTestId(
      'payment-information-component-container',
    )

    expect(shippingAddressContainerElement).not.toBeInTheDocument()
    expect(paymentInformationContainerElement).toBeInTheDocument()
  })

  it('should be able to render the registration form component correctly with payment information form', async () => {
    fillPersonalInformationForm()

    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      fillShippingAddressForm()
      fireEvent.click(registrationFormSubmitButtonElement)
    })

    const paymentInformationContainerElement = screen.getByTestId(
      'payment-information-component-container',
    )

    expect(paymentInformationContainerElement).toBeInTheDocument()
  })

  it('should be able to submit the payment information form when all fields are filled correctly and submit button is clicked', async () => {
    fillPersonalInformationForm()

    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      fillShippingAddressForm()
      fireEvent.click(registrationFormSubmitButtonElement)
    })

    await waitFor(() => {
      fillPaymentInformationForm()
      fireEvent.click(registrationFormSubmitButtonElement)
    })

    expect(mockToastFunction).toHaveBeenCalled()
    expect(mockToastFunction).toHaveBeenCalledTimes(1)
  })

  it('should be able to display an error message when the personal information form is submitted with empty fields', async () => {
    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      const [
        personalInformationFirstNameErrorMessageElement,
        personalInformationLastNameErrorMessageElement,
        personalInformationPhoneErrorMessageElement,
      ] = screen.queryAllByTestId('input-component-error-message')

      expect(
        personalInformationFirstNameErrorMessageElement,
      ).toBeInTheDocument()
      expect(personalInformationFirstNameErrorMessageElement).toHaveTextContent(
        'First name is required',
      )

      expect(personalInformationLastNameErrorMessageElement).toBeInTheDocument()
      expect(personalInformationLastNameErrorMessageElement).toHaveTextContent(
        'Last name is required',
      )

      expect(personalInformationPhoneErrorMessageElement).toBeInTheDocument()
      expect(personalInformationPhoneErrorMessageElement).toHaveTextContent(
        'Phone is required',
      )
    })
  })

  it('should be able to display an error message when the shipping address form is submitted with empty fields', async () => {
    fillPersonalInformationForm()

    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      fireEvent.click(registrationFormSubmitButtonElement)

      const [
        shippingAddressAddressErrorMessageElement,
        shippingAddressCityErrorMessageElement,
        shippingAddressStateErrorMessageElement,
        shippingAddressZipCodeErrorMessageElement,
      ] = screen.queryAllByTestId('input-component-error-message')

      expect(shippingAddressAddressErrorMessageElement).toBeInTheDocument()
      expect(shippingAddressAddressErrorMessageElement).toHaveTextContent(
        'Address is required',
      )

      expect(shippingAddressCityErrorMessageElement).toBeInTheDocument()
      expect(shippingAddressCityErrorMessageElement).toHaveTextContent(
        'City is required',
      )

      expect(shippingAddressStateErrorMessageElement).toBeInTheDocument()
      expect(shippingAddressStateErrorMessageElement).toHaveTextContent(
        'State is required',
      )

      expect(shippingAddressZipCodeErrorMessageElement).toBeInTheDocument()
      expect(shippingAddressZipCodeErrorMessageElement).toHaveTextContent(
        'Zip code is required',
      )
    })
  })

  it('should be able to display an error message when the payment information form is submitted with empty fields', async () => {
    fillPersonalInformationForm()

    const registrationFormSubmitButtonElement = screen.getByTestId(
      'registration-form-component-submit-button',
    )

    fireEvent.click(registrationFormSubmitButtonElement)

    await waitFor(() => {
      fillShippingAddressForm()
      fireEvent.click(registrationFormSubmitButtonElement)
    })

    await waitFor(() => {
      fireEvent.click(registrationFormSubmitButtonElement)

      const [
        paymentInformationCardNumberErrorMessageElement,
        paymentInformationCardholderNameErrorMessageElement,
        paymentInformationExpirationDateErrorMessageElement,
        paymentInformationCvvErrorMessageElement,
      ] = screen.queryAllByTestId('input-component-error-message')

      expect(
        paymentInformationCardNumberErrorMessageElement,
      ).toBeInTheDocument()
      expect(paymentInformationCardNumberErrorMessageElement).toHaveTextContent(
        'Card number is required',
      )

      expect(
        paymentInformationCardholderNameErrorMessageElement,
      ).toBeInTheDocument()
      expect(
        paymentInformationCardholderNameErrorMessageElement,
      ).toHaveTextContent('Cardholder name is required')

      expect(
        paymentInformationExpirationDateErrorMessageElement,
      ).toBeInTheDocument()
      expect(
        paymentInformationExpirationDateErrorMessageElement,
      ).toHaveTextContent('Expiration date is required')

      expect(paymentInformationCvvErrorMessageElement).toBeInTheDocument()
      expect(paymentInformationCvvErrorMessageElement).toHaveTextContent(
        'CVV is required',
      )
    })
  })
})
