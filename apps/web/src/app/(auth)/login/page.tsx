import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Text,
  Link,
} from '@chakra-ui/react';

export default function Login() {
  return (
    <>
      <Flex minH="100vh" align="center" justify="center" py={12} px={6}>
        <Box w="full" maxW="md">
          <Box textAlign="center">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
              style={{ margin: '0 auto', height: '40px', width: 'auto' }}
            />
            <Heading
              mt={6}
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              color="gray.900"
            >
              Sign in to your account
            </Heading>
          </Box>

          <Box mt={10} bg="white" p={6} rounded="lg" shadow="lg">
            <form>
              <Stack spacing={6}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" autoComplete="email" />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" autoComplete="current-password" />
                </FormControl>

                <Button type="submit" colorScheme="teal" size="lg" width="full">
                  Sign in
                </Button>
              </Stack>
            </form>
          </Box>

          <Text mt={10} textAlign="center" fontSize="sm" color="gray.500">
            Don't have an account?{' '}
            <Link href="/register" color="teal.500" fontWeight="bold">
              Register
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
}
