import { Grid } from '@chakra-ui/react'

import { Carousel } from '../components/carousel'
import { ProductCard } from '../components/product-card'

export default function Home() {
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
        {Array.from({ length: 10 }).map((_, index) => {
          return <ProductCard key={index} />
        })}
      </Grid>
    </>
  )
}
