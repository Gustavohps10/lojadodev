import { Grid, Heading } from '@chakra-ui/react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Carousel } from '../components/carousel'
import { ProductCard } from '../components/product-card'
import { env } from '../env'
import { getProducts } from './utils'

export const revalidate = 60 * 60 // 1 hour

export const metadata: Metadata = {
  title: `${env.APP_NAME} | Home`,
  description: 'Home page',
}

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Carousel />
      <Heading size="xl" my={8} textAlign="center" color="gray.400">
        Melhores Produtos
      </Heading>
      <Grid
        templateColumns="repeat(auto-fit, 300px)"
        justifyContent="center"
        gap={6}
        maxW={1280}
        mx="auto"
        my={4}
      >
        {products.map((product) => {
          return (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          )
        })}
      </Grid>
    </>
  )
}
