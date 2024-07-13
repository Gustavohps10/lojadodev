import { Grid } from '@chakra-ui/react'

import { ProductCard } from '../components/product-card'

export default function Home() {
  return (
    <>
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
