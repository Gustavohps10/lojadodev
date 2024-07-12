import type { Metadata } from "next";

import { fonts } from "./fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Marketplace App",
  description: "A simple marketplace page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fonts.roboto.className}>
        <Providers>{children}
        </Providers>
      </body>
    </html>
  );
}
