import {
  Box,
  Link,
  Stack,
  Heading,
  Image,
  Container,
  Input,
  Button,
  SimpleGrid,
  Checkbox,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import Footer from '../components/Footer';

export default function Login() {
  const onSignIn = () => {
    // TODO: sign in
    window.location.href = '/';
  };
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 2, md: 5 }} p={{ base: 4, sm: 6, md: 8 }}>
          <Image
            htmlWidth="254px"
            htmlHeight="104px"
            objectFit="cover"
            src="/logo256.png"
            alt="UNS"
          />
          <Heading
            color={'gray.600'}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          >
            Enterprise Resource Planning
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Sign in to your account
            </Heading>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel color={'gray.500'}>Email address</FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel color={'gray.500'}>Password</FormLabel>
                <Input
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox color={'gray.500'}>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={onSignIn}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          form
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
