import { Grid } from '@chakra-ui/react'
import Stripe from 'stripe'

import { Carousel } from '../components/carousel'
import { ProductCard } from '../components/product-card'
import { stripe } from '../lib/stripe'

export default async function Home() {
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

  return (
    <>
      <Carousel />
      <Grid
        templateColumns="repeat(auto-fit, 300px)"
        justifyContent="center"
        gap={6}
        maxW={1280}
        mx="auto"
        my={4}
      >
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </Grid>
    </>
  )
}
