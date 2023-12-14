import { render, renderHook, screen } from '@testing-library/react'
import { ShippingAddress } from '@/components/Forms/ShippingAddress'
import { FormProvider, useForm } from 'react-hook-form'
import { RegistrationFormSchemaProps } from '@/validations/registrationForm'

describe('Form ShippingAddress Component', () => {
  beforeEach(() => {
    const useFormMethods = renderHook(() =>
      useForm<RegistrationFormSchemaProps>(),
    ).result.current

    render(
      <FormProvider {...useFormMethods}>
        <ShippingAddress />
      </FormProvider>,
    )
  })

  it('should be able to render the shipping address component correctly', () => {
    const shippingAddressContainerElement = screen.getByTestId(
      'shipping-address-component-container',
    )
    const shippingAddressTitleElement = screen.getByTestId(
      'shipping-address-component-title',
    )
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
    const inputComponentErrorMessageElement = screen.queryByTestId(
      'input-component-error-message',
    )

    expect(shippingAddressContainerElement).toBeInTheDocument()

    expect(shippingAddressTitleElement).toBeInTheDocument()
    expect(shippingAddressTitleElement).toHaveTextContent('Shipping address')

    expect(shippingAddressAddressElement).toBeInTheDocument()
    expect(shippingAddressAddressElement).toHaveAttribute('type', 'text')

    expect(shippingAddressCityElement).toBeInTheDocument()
    expect(shippingAddressCityElement).toHaveAttribute('type', 'text')

    expect(shippingAddressStateElement).toBeInTheDocument()
    expect(shippingAddressStateElement).toHaveAttribute('type', 'text')

    expect(shippingAddressZipCodeElement).toBeInTheDocument()
    expect(shippingAddressZipCodeElement).toHaveAttribute('type', 'text')

    expect(inputComponentErrorMessageElement).not.toBeInTheDocument()
  })
})
