'use client';

import { Button, Flex, Link, Spacer } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <Flex as="header" bg="teal.500" p={4} color="white" alignItems="center">
        <Link
          href="/"
          style={
            pathname === '/'
              ? {
                  color: 'tomato',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                  fontSize: 'xl',
                }
              : { color: 'white' }
          }
          mr={4}
        >
          Home
        </Link>

        <Link
          href="/profile"
          style={
            pathname === '/profile'
              ? {
                  color: 'tomato',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                  fontSize: 'xl',
                }
              : { color: 'white' }
          }
        >
          Profile
        </Link>

        <Button
          as={Link}
          href="/login"
          colorScheme="red"
          variant="solid"
          flex={'right'}
          ml={'auto'}
        >
          Login
        </Button>
      </Flex>
    </>
  );
};
