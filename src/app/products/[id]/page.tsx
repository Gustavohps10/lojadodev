'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

export default function Product({ params }: { params: { id: string } }) {
  const [size, setSize] = useState('m')

  return (
    <>
      <Flex my={8} gap={8} wrap="wrap" justify="center">
        <Flex w={400} h={400}>
          <img
            width={400}
            height={400}
            src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xUGNMYzlKSklvOU9XdkE0fGZsX3Rlc3RfUGZLWEEyVmpmM0UxQUN2Zm03VnZienZI00KQobBxwO&w=640&q=75"
            alt="Produto 1234"
          />
        </Flex>

        <Box minW={400}>
          <Heading as="h1">Product name</Heading>
          <Text fontSize="2xl" fontWeight="semibold" color="gray.500">
            R$ 129,99
          </Text>
          <Text maxW="400" color="gray.400" mt="8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            repudiandae numquam pariatur, laudantium explicabo minima sed! Eum
            illo veniam animi earum odio veritatis autem amet laudantium! Modi
            exercitationem doloribus unde.
          </Text>

          <Heading my="4" size="md">
            Tamanho:
          </Heading>
          <RadioGroup onChange={setSize} value={size}>
            <Stack direction="row">
              <Radio value="p">P</Radio>
              <Radio value="m">M</Radio>
              <Radio value="g">G</Radio>
            </Stack>
          </RadioGroup>
          <Box></Box>

          <Button
            p="relative"
            bottom={0}
            w="full"
            mt={8}
            variant="outline"
            alignItems="center"
            gap={2}
          >
            <Icon as={MdAddShoppingCart} size="lg" /> Compre agora
          </Button>
        </Box>
      </Flex>
    </>
  )
}
