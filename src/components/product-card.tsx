import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { TiShoppingCart } from 'react-icons/ti'

import fakeImage from '../assets/shirts/1.png'

export function ProductCard() {
  return (
    <Card
      maxW="400px"
      boxShadow="lg"
      cursor="pointer"
      transition="all .2s ease"
      _hover={{
        transform: 'translateY(-8px)',
      }}
      role="group"
      p={4}
    >
      <CardBody p={0}>
        <Box
          w="100%"
          h={180}
          bg="blackAlpha.50"
          rounded="md"
          overflow="hidden"
          transition="all .3s linear"
          _groupHover={{ background: '#0000001f' }}
        >
          <Box
            w={180}
            mx="auto"
            p={4}
            transition="all .2s ease"
            _groupHover={{ width: 190 }}
          >
            <Image width={400} height={400} src={fakeImage} alt="Camiseta" />
          </Box>
        </Box>
        <Text mt={2} color="gray.400" fontSize="lg" fontWeight="semibold">
          R$ 250,00
        </Text>
        <Stack py={3} spacing="1">
          <Heading size="md" fontWeight={900}>
            Camiseta - JS do it
          </Heading>
          <Text color="gray.500">2024</Text>
          <Text fontWeight={300} color={'gray.300'}>
            Uma camisa muito bonita
          </Text>
        </Stack>
      </CardBody>
      <CardFooter px={0} py={2}>
        <Button
          variant="outline"
          colorScheme="gray"
          alignItems="center"
          fontWeight="semibold"
          gap={2}
          mx="auto"
          size="lg"
          rounded="full"
        >
          <TiShoppingCart size={20} /> Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}