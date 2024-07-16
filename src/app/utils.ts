import { cache } from 'react'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'

export const getProducts = cache(async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })
  return products
})