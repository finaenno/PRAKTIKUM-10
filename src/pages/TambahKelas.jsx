import React from 'react';
import './tambahKelas.css';
import {
  Heading,
  FormControl,
  FormLabel,
  // Select,
  // Stack,
  Input,
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  useDisclosure,
  HStack,
  Text,
  icon,
  Center,
  // border,
  // color
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
// import { ThemeProvider } from '@emotion/react';

function AccButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button id="buttonBatalkan" onClick={onOpen}>
        {' '}
        Batalkan{' '}
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader bg="#CA2424" fontFamily="Poppins" color="white">
            Peringatan !{' '}
          </AlertDialogHeader>
          <AlertDialogCloseButton color="white" />
          <AlertDialogBody
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="bold"
            lineHeight="21px"
            letterSpacing="0em"
            padding="14px"
            textAlign="center"
          >
            Anda yakin ingin membatalkan pembuatan kelas?
          </AlertDialogBody>
          <Center>
            <AlertDialogFooter>
              <Button
                background="#005FEE"
                color="white"
                border="3px solid #005FEE"
                _hover={{
                  color: '#005FEE',
                  bg: '#c1c1c1',
                  borderColor: '#c1c1c1',
                }}
                ref={cancelRef}
                onClick={onClose}
              >
                Batalkan
              </Button>
              <Button
                background="#005FEE"
                color="white"
                border="3px solid #005FEE"
                _hover={{
                  color: '#005FEE',
                  bg: '#c1c1c1',
                  borderColor: '#c1c1c1',
                }}
                ml={3}
              >
                Hapus
              </Button>
            </AlertDialogFooter>
          </Center>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default class TambahKelas extends React.Component {
  constructor() {
    super();
    this.state = {
      pilihLevel: '',
      pilihJurusan: '',
      namaKelas: '',
      pilihWaliKelas: '',
      namaKelasBaru: '',
      pilihWaliKelasBaru: '',
    };
  }

  handlePilihLevelChange = (e) => {
    this.setState({
      pilihLevel: e.target.value,
    });
  };

  handlePilihJurusanChange = (e) => {
    this.setState({
      pilihJurusan: e.target.value,
    });
  };

  handleNamaKelasChange = (e) => {
    this.setState({
      namaKelas: e.target.value,
    });
  };

  handlePilihWaliKelasChange = (e) => {
    this.setState({
      pilihWaliKelas: e.target.value,
    });
  };

  handleNamaKelasBaruChange = (e) => {
    this.setState({
      namaKelasBaru: e.target.value,
    });
  };

  handlePilihWaliKelasBaruChange = (e) => {
    this.setState({
      pilihWaliKelasBaru: e.target.value,
    });
  };

  render() {
    const {
      pilihLevel,
      pilihJurusan,
      namaKelas,
      pilihWaliKelas,
      namaKelasBaru,
      pilihWaliKelasBaru,
    } = this.state;
    const enabled =
      pilihLevel.length > 0 &&
      pilihJurusan.length > 0 &&
      namaKelas.length > 0 &&
      pilihWaliKelas.length > 0 &&
      namaKelasBaru.length > 0 &&
      pilihWaliKelasBaru.length > 0;

    return (
      <body>
        <Heading id="heading">FORM TAMBAH KELAS</Heading>
        <FormControl id="PilihLevel" isRequired>
          <HStack spacing="60px">
            <FormLabel for="pilihLevel" id="labelLevel">
              Level
            </FormLabel>
            <select
              name="pilihLevel"
              id="dropdownLevel"
              onChange={this.handlePilihLevelChange}
            >
              <option hidden>Pilih Level</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </HStack>
        </FormControl>
        <FormControl id="PilihJurusan" isRequired>
          <HStack spacing="60px">
            <FormLabel id="labelJurusan" for="pilihJurusan">
              Jurusan{' '}
            </FormLabel>
            <select
              id="dropdownJurusan"
              name="pilihJurusan"
              onChange={this.handlePilihJurusanChange}
            >
              <option hidden>Pilih Jurusan</option>
              <option value="ipa">IPA</option>
              <option value="ips">IPS</option>
              <option value="bahasa">BAHASA</option>
            </select>
          </HStack>
        </FormControl>
        <HStack direction="row" spacing="-490px">
          <FormControl id="tambahKelas" isRequired>
            <HStack spacing="10px">
              <FormLabel id="labelNamaKelas">Nama Kelas </FormLabel>
              <Input
                type="text"
                id="inputNamaKelas"
                name="NamaKelas"
                maxLength={20}
                onChange={this.handleNamaKelasChange}
                value={this.state.namaKelas}
              />
            </HStack>
          </FormControl>
          <FormControl id="Walikelas" isRequired>
            <HStack spacing="10px">
              <FormLabel id="labelWaliKelas">Walikelas </FormLabel>
              <select
                id="dropdownWaliKelas"
                name="PilihWalikelas"
                onChange={this.handlePilihWaliKelasChange}
              >
                <option hidden>Pilih Walikelas</option>
                <option value="Mrs.X">Mrs.X</option>
                <option value="Ms.Y">Ms.Y</option>
                <option value="Mr.Z">Mr.Z</option>
              </select>
            </HStack>
          </FormControl>
        </HStack>
        <HStack direction="row" spacing="-987px">
          <FormControl id="tambahKelasBaru" isRequired>
            <HStack spacing="10px">
              <FormLabel id="labelNamaKelas">Nama Kelas </FormLabel>
              <Input
                type="text"
                id="inputNamaKelas"
                name="NamaKelasBaru"
                maxLength={20}
                onChange={this.handleNamaKelasBaruChange}
                value={this.state.namaKelasBaru}
              />
            </HStack>
          </FormControl>
          <FormControl id="Walikelas" marginRight="100px" isRequired>
            <HStack spacing="10px">
              <FormLabel id="labelWaliKelasBaru">Walikelas </FormLabel>
              <select
                id="dropdownWaliKelas"
                name="PilihWaliKelasBaru"
                onChange={this.handlePilihWaliKelasBaruChange}
              >
                <option hidden>Pilih Walikelas</option>
                <option value="Mrs.X">Mrs.X</option>
                <option value="Ms.Y">Ms.Y</option>
                <option value="Mr.Z">Mr.Z</option>
              </select>
            </HStack>
          </FormControl>
          <IconButton id="deleteIcon" icon={<DeleteIcon />} />
        </HStack>
        <Button id="buttonAddClass" leftIcon={icon}>
          <Text mx="30px">+ Tambahkan</Text>
        </Button>
        <HStack spacing="90px">
          <AccButton></AccButton>
          <button id="buttonOk" disabled={!enabled}>
            {' '}
            OK{' '}
          </button>
        </HStack>
      </body>
    );
  }
}
