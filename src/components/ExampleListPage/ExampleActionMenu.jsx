import {
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  useMenuButton,
} from '@chakra-ui/react';
import {
  FiCopy,
  FiEdit,
  FiMoreVertical,
  FiPower,
  FiTrash,
} from 'react-icons/fi';

export const ExampleActionMenu = () => {
  return (
    <Menu>
      <useMenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMoreVertical />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<FiPower />}>Activate</MenuItem>
        <MenuItem icon={<FiCopy />}>Duplicat</MenuItem>
        <MenuItem icon={<FiEdit />}>Ganti Nama</MenuItem>
        <MenuItem icon={<FiTrash />}>Hapus</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ExampleActionMenu;
