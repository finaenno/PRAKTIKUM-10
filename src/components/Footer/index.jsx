import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="blue.300">
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Box bg="gray.900" color="gray.200">
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 2fr' }}
            spacing={8}
          >
            <Stack align={'flex-start'}>
              <ListHeader>Portal Informasi</ListHeader>
              <Link href="https://uns.ac.id/">Laman UNS</Link>
              <Link href="https://spmb.uns.ac.id/">
                Penerimaan Mahasiswa Baru UNS
              </Link>
              <Link href={'#'}>Akademik UNS</Link>
              <Link href={'#'}>Kepegawaian UNS</Link>
              <Link href={'#'}>Kemahasiswaan UNS</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'#'}>UNS on News</Link>
              <Link href={'#'}>UNS Event</Link>
              <Link href={'#'}>Galeri UNS</Link>
              <Link href={'#'}>Rumah Sakit UNS</Link>
              <Link href={'#'}>Kiprah Mahasiswa UNS</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'#'}>Karya Ilmiah Pendidik UNS</Link>
              <Link href={'#'}>UNS Green Campus</Link>
              <Link href={'#'}>Produk & Penelitian</Link>
              <Link href={'#'}>Sivitas UNS Berkarya</Link>
              <Link href={'#'}>Reformasi Birokrasi UNS</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'#'}>Video UNS</Link>
              <Link href={'#'}>Sambutan Rektor UNS</Link>
              <Link href={'#'}>Alumni UNS</Link>
              <Link href={'#'}>Kearifan Lokal UNS</Link>
              <Link href={'#'}>Lowongan Kerja dan Karir</Link>
            </Stack>
            <Stack spacing={1}>
              <Box>
                <Image
                  htmlWidth="139px"
                  htmlHeight="58px"
                  objectFit="cover"
                  src="/logo-white.png"
                  alt="UNS"
                />
              </Box>
              <Link
                href="https://maps.google.com/maps?z=16&q=universitas%2Bsebelas%2Bmaret%2C%2Bjalan%2Bir.%2Bsutami%2B36%2Bkentingan%2C%2Bjebres%2C%2Bsurakarta%2C%2Bjawa%2Btengah.%2Bindonesia%2B57126."
                fontSize={'sm'}
              >
                Jalan Ir. Sutami 36 Kentingan, Jebres, Surakarta, Jawa Tengah.
                Indonesia 57126.
              </Link>
              <Text fontSize={'sm'}>
                Telepon 0271-646994 | Faksimile : 0271-646655
              </Text>
              <Link href="mailto:campus@mail.uns.ac.id" fontSize={'sm'}>
                campus@mail.uns.ac.id
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor="gray.600"
        bg="gray.900"
        color="gray.200"
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© Universitas Sebelas Maret - All Rights Reserved</Text>
        </Container>
      </Box>
    </>
  );
}
