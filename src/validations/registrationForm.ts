import { z } from 'zod'
import {
  PersonalInformationFormSchemaProps,
  personalInformationSchema,
} from './personalInformation'
import {
  ShippingAddressFormSchemaProps,
  shippingAddressSchema,
} from './shippingAddress'
import {
  PaymentInformationFormSchemaProps,
  paymentInformationSchema,
} from './paymentInformation'

export enum RegistrationFormTypeEnum {
  PersonalInformation = 'personalInformation',
  ShippingAddress = 'shippingAddress',
  PaymentInformation = 'paymentInformation',
}

export const registrationFormSchema = z.discriminatedUnion('formType', [
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.PersonalInformation),
    personalInformation: personalInformationSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.ShippingAddress),
    shippingAddress: shippingAddressSchema,
  }),
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.PaymentInformation),
    paymentInformation: paymentInformationSchema,
  }),
])

export type RegistrationFormSchemaProps = {
  formType: RegistrationFormTypeEnum
  personalInformation: PersonalInformationFormSchemaProps
  shippingAddress: ShippingAddressFormSchemaProps
  paymentInformation: PaymentInformationFormSchemaProps
}
