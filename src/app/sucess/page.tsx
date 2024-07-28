import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { getSessionData } from '../utils'

export default async function Sucess({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  const session = await getSessionData(searchParams.session_id)

  //   const toast = useToast()

  //   toast({
  //     title: 'Compra realizada com sucesso.',
  //     description: 'Você já pode continuar comprando.',
  //     status: 'success',
  //     duration: 8000,
  //     isClosable: true,
  //     position: 'top',
  //   })
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
              src={session.imageUrl}
              alt="Green double couch with wooden legs"
            />
          </Flex>
          <Stack mt="6" spacing="3">
            <Text align="center" my={4}>
              Uhuul, <b>{session.customerName}</b> o produto{' '}
              <b>{session.productName}</b> já esta sendo preparado para envio.
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
