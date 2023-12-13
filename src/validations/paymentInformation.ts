import { z } from 'zod'

export const paymentInformationSchema = z.object({
  cardNumber: z
    .string()
    .min(1, 'Card number is required')
    .max(19, 'Card number is too long'),
  cardholderName: z
    .string()
    .min(1, 'Cardholder name is required')
    .max(50, 'Cardholder name is too long'),
  expirationDate: z
    .string()
    .min(1, 'Expiration date is required')
    .max(50, 'Expiration date is too long'),
  cvv: z.string().min(1, 'CVV is required').max(3, 'CVV is invalid'),
})

export type PaymentInformationFormSchemaProps = z.infer<
  typeof paymentInformationSchema
>
