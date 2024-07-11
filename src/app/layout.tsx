import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({weight: ["400", "500", "700"], subsets: ['latin']});

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
