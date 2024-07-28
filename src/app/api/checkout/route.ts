import { NextRequest, NextResponse } from 'next/server'

import { env } from '../../../env'
import { stripe } from '../../../lib/stripe'

export async function POST(req: NextRequest) {
  const { priceId } = await req.json()

  if (!priceId) {
    return NextResponse.json(
      {
        error: 'Price Id not found',
      },
      {
        status: 400,
      },
    )
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${env.NEXT_URL}/sucess`,
    cancel_url: `${env.NEXT_URL}/cancel`,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return NextResponse.json(
    {
      checkoutUrl: checkoutSession.url,
    },
    {
      status: 201,
    },
  )
}
