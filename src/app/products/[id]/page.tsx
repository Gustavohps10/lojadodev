import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MdAddShoppingCart } from 'react-icons/md'

import { getProduct } from '../../utils'

export const revalidate = 60 * 60 // 1 hour

export async function generateStaticParams() {
  return [{ id: 'prod_QTx9zkZss8vdPZ' }]
}

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Flex my={8} gap={8} wrap="wrap" justify="center">
        <Flex w={400} h={400}>
          <Box w={400}>
            <Image
              src={product.imageUrl}
              alt="Imagem do produto"
              width={400}
              height={400}
            />
          </Box>
        </Flex>

        <Box minW={400}>
          <Heading as="h1">{product.name}</Heading>
          <Text fontSize="2xl" fontWeight="semibold" color="gray.500">
            {product.price}
          </Text>
          <Text maxW="400" color="gray.400" mt="8">
            {product.description}
          </Text>

          <Button w="full" mt={8} variant="outline" gap={2}>
            <MdAddShoppingCart size={20} /> Compre agora
          </Button>
        </Box>
      </Flex>
    </>
  )
}
