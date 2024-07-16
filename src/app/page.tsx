import { Grid } from '@chakra-ui/react'

import { Carousel } from '../components/carousel'
import { ProductCard } from '../components/product-card'
import { getProducts } from './utils'

export const revalidate = 60 * 60 // 1 hour

export default async function Home() {
  const products = await getProducts()

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
