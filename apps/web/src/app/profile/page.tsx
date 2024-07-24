import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Avatar,
} from '@chakra-ui/react';

export default function Profile() {
  return (
    <>
      <Box as="main" p={4}>
        <Flex direction="column" align="center" maxW="md" mx="auto" mt={8}>
          <Avatar size="2xl" name="John Doe" src="https://bit.ly/broken-link" />
          <Heading as="h2" size="lg" mt={4}>
            Arif Rahman Andika
          </Heading>
          <Text fontSize="lg" color="gray.600" mt={2}>
            Points: 1.200
          </Text>

          <Stack spacing={4} mt={8} w="100%">
            <Button colorScheme="teal" variant="solid">
              Edit Profile
            </Button>

            <Button colorScheme="red" variant="solid">
              Logout
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
