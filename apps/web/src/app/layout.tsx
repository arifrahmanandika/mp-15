'use client';

import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const disableNavbar = ['/login', '/register'];

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {!disableNavbar.includes(pathname) && <Header />}
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
