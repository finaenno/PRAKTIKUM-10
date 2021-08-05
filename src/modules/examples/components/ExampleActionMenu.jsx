import {
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from '@chakra-ui/react';
import {
  FaCopy,
  FaEdit,
  FaEllipsisV,
  FaPowerOff,
  FaTrash,
} from 'react-icons/fa';

export const ExampleActionMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaEllipsisV />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<FaPowerOff />}>Activate</MenuItem>
        <MenuItem icon={<FaCopy />}>Duplicat</MenuItem>
        <MenuItem icon={<FaEdit />}>Ganti Nama</MenuItem>
        <MenuItem icon={<FaTrash />}>Hapus</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ExampleActionMenu;
