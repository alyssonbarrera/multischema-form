import { z } from 'zod'

export const shippingAddressSchema = z.object({
  address: z
    .string()
    .min(1, 'Address is required')
    .max(50, 'Address is too long'),
  city: z.string().min(1, 'City is required').max(50, 'City is too long'),
  state: z.string().min(1, 'State is required').max(50, 'State is too long'),
  zipCode: z
    .string()
    .min(1, 'Zip code is required')
    .max(50, 'Zip code is too long'),
})

export type ShippingAddressFormSchemaProps = z.infer<
  typeof shippingAddressSchema
>
