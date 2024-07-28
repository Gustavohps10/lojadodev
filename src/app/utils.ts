import { cache } from 'react'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'

export const getProducts = cache(async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    if (!price.unit_amount) {
      throw new Error('Price is empty')
    }

    const currencyPrice = price.unit_amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return {
      id: product.id,
      name: product.name,
      description: product.description as string,
      imageUrl: product.images[0],
      price: currencyPrice,
    }
  })
  return products
})

export const getProduct = cache(async (id: string) => {
  try {
    const data = await stripe.products.retrieve(id, {
      expand: ['default_price'],
    })

    const price = data.default_price as Stripe.Price

    if (!price.unit_amount) {
      throw new Error('Price is empty')
    }

    const currencyPrice = price.unit_amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    const product = {
      id: data.id,
      name: data.name,
      description: data.description as string,
      imageUrl: data.images[0],
      price: currencyPrice,
      defaultPriceId: price.id,
    }

    return product
  } catch (error) {
    return undefined
  }
})

export const getSessionData = cache(async (sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  if (
    !session.line_items ||
    !session.line_items.data[0] ||
    !session.line_items.data[0].price ||
    !session.customer_details
  ) {
    throw new Error('Items not found')
  }

  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    customerName: session.customer_details.name,
    productName: product.name,
    imageUrl: product.images[0],
  }
})
