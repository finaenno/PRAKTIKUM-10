import { Tr, Td, Tag } from '@chakra-ui/react';
import { ExampleActionMenu } from './ExampleActionMenu';

export const ExampleListItem = ({ text, num, status }) => {
  let scheme;
  if (status === 'sukses') {
    scheme = 'green';
  } else if (status === 'warning') {
    scheme = 'yellow';
  }
  if (status === 'gagal') {
    scheme = 'red';
  }
  return (
    <Tr>
      <Td>{text}</Td>
      <Td isNumeric>{num}</Td>
      <Td>
        <Tag colorScheme={scheme} size="sm" textTransform="uppercase">
          {status}
        </Tag>
      </Td>
      <Td>
        <ExampleActionMenu />
      </Td>
    </Tr>
  );
};
export default ExampleListItem;
