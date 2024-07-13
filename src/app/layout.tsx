import { Box } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { Navbar } from '../components/navbar'
import { fonts } from './fonts'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Marketplace App',
  description: 'A simple marketplace page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={fonts.roboto.className}>
        <Providers>
          <Navbar />
          <Box px={20}>{children}</Box>
        </Providers>
      </body>
    </html>
  )
}
