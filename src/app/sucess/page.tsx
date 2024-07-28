'use client'

import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import fakeImage from '../../assets/shirts/1.png'

export default function Sucess() {
  const toast = useToast()
  useEffect(() => {
    toast({
      title: 'Compra realizada com sucesso.',
      description: 'Você já pode continuar comprando.',
      status: 'success',
      duration: 8000,
      isClosable: true,
      position: 'top',
    })
  }, [toast])

  return (
    <Center my="8">
      <Card maxW="md">
        <CardBody>
          <Heading my={6} size="md" textAlign="center">
            Compra efetuada!
          </Heading>
          <Flex
            w="full"
            height="auto"
            borderRadius="md"
            justify="center"
            align="center"
          >
            <Image
              width={300}
              height={300}
              src={fakeImage}
              alt="Green double couch with wooden legs"
            />
          </Flex>
          <Stack mt="6" spacing="3">
            <Text align="center" my={4}>
              Uhuul, <b>Gustavo Henrique</b> o produto <b>Camiseta JS</b> já
              esta sendo preparado para envio.
            </Text>
            <Link href="/">
              <Text
                color="blue.600"
                fontSize="xl"
                align="center"
                fontWeight="bold"
              >
                Voltar para home
              </Text>
            </Link>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  )
}
