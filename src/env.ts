import { z } from 'zod'

const envSchema = z.object({
  APP_NAME: z.string(),
  NEXT_URL: z.string().url(),
  MODE: z.enum(['development', 'production', 'test']).default('production'),
  STRIPE_PUBLIC_KEY: z.string(),
  STRIPE_SECRET_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
