import { z } from 'zod'

export const personalInformationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'Name is too long'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name is too long'),
  phone: z.string().min(1, 'Phone is required').max(20, 'Phone is invalid'),
})

export type PersonalInformationFormSchemaProps = z.infer<
  typeof personalInformationSchema
>
