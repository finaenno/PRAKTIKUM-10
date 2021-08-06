import { Tr, Td, Tag, Link } from '@chakra-ui/react';
import ExampleActionMenu from './ExampleActionMenu';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom';

export const ExampleListItem = ({
  id,
  nama,
  nilai,
  status,
  tanggal,
  ...rest
}) => {
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
    <Tr {...rest}>
      <Td>
        <Link color="blue.600" to={`/example/${id}`} as={LinkRouter}>
          {nama}
        </Link>
      </Td>
      <Td isNumeric>{nilai}</Td>
      <Td>
        <Tag colorScheme={scheme} size="sm" textTransform="uppercase">
          {status}
        </Tag>
      </Td>
      <Td>{dayjs(tanggal).format('DD/MM/YYYY')}</Td>
      <Td>
        <ExampleActionMenu />
      </Td>
    </Tr>
  );
};

ExampleListItem.propTypes = {
  id: PropTypes.string,
  nama: PropTypes.string,
  nilai: PropTypes.number,
  status: PropTypes.oneOf(['sukses', 'warning', 'gagal']),
  tanggal: PropTypes.string,
};

export default ExampleListItem;
