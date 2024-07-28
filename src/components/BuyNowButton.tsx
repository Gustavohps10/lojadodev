'use client'

import { Button, Icon } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

interface BuyNowButtonProps {
  priceId: string
}

export function BuyNowButton({ priceId }: BuyNowButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (e) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Button
      disabled={isCreatingCheckoutSession}
      w="full"
      mt={8}
      variant="outline"
      gap={2}
      onClick={handleBuyProduct}
    >
      <Icon as={MdAddShoppingCart} /> Compre agora
    </Button>
  )
}
