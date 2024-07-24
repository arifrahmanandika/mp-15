import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Text,
  Link,
} from '@chakra-ui/react';

export default function Register() {
  return (
    <ChakraProvider>
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
              Create a new account
            </Heading>
          </Box>

          <Box mt={10} bg="white" p={6} rounded="lg" shadow="lg">
            <form>
              <Stack spacing={6}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" autoComplete="name" />
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" autoComplete="email" />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" autoComplete="new-password" />
                </FormControl>

                <FormControl id="confirm-password" isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" autoComplete="new-password" />
                </FormControl>

                <FormControl id="role" isRequired>
                  <FormLabel>User Role</FormLabel>
                  <Select placeholder="Select role">
                    <option value="Customer">Customer</option>
                    <option value="Organizer">Organizer</option>
                  </Select>
                </FormControl>

                <FormControl id="referral">
                  <FormLabel>Referral Number</FormLabel>
                  <Input type="text" autoComplete="referral" />
                </FormControl>

                <Button type="submit" colorScheme="teal" size="lg" width="full">
                  Register
                </Button>
              </Stack>
            </form>
          </Box>

          <Text mt={10} textAlign="center" fontSize="sm" color="gray.500">
            Already have an account?{' '}
            <Link href="/login" color="teal.500" fontWeight="bold">
              Sign in!
            </Link>
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
