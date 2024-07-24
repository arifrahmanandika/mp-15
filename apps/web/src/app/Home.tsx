import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
} from '@chakra-ui/react';

export default function HomePage() {
  return (
    <>
      <h1>List Event</h1>

      <Stack spacing="6" direction={['column', 'row']}>
        {[
          {
            name: 'Living Room Sofa',
            price: 100000,
            image:
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          },
          {
            name: 'Living Room Sofa',
            price: 50000,
            image:
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          },
          {
            name: 'Living Room Sofa',
            price: 100000,
            image:
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          },
          {
            name: 'Living Room Sofa',
            price: 50000,
            image:
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          },
        ].map((event, index) => (
          <Card key={index} maxW="sm">
            <CardBody>
              <Image src={event.image} alt={event.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{event.name}</Heading>
                <Text>
                  {event.name} is perfect for modern spaces, minimalist inspired
                  spaces and for people who love a minimal design with a
                  sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Rp {event.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </>
  );
}
