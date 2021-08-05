import {
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
  IconButton,
} from '@chakra-ui/react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Pagination = ({ page, changeQuery, limit, total }) => {
  const lastPage = Math.floor(total / limit);
  return (
    <Flex alignItems="center">
      <Flex alignItems="center" flex="1">
        <Text flexShrink="0" mr={8} color="gray.600">
          Halaman{' '}
          <Text fontWeight="bold" as="span">
            {page}
          </Text>{' '}
          dari{' '}
          <Text fontWeight="bold" as="span">
            {lastPage}
          </Text>
        </Text>
      </Flex>
      <Flex alignItems="center" mr={2}>
        <Text flexShrink="0">Tampilkan:</Text>{' '}
        <Select
          ml={2}
          w={24}
          value={limit}
          onChange={(e) => changeQuery({ limit: Number(e.target.value) })}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex alignItems="center" mr={2}>
        <Text flexShrink="0">Ke halaman:</Text>{' '}
        <NumberInput
          ml={2}
          mr={8}
          w={24}
          min={1}
          max={lastPage}
          onChange={(value) => {
            changeQuery({ limit: Number(value) });
          }}
          defaultValue={page}
          value={page}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      <Flex mr={2}>
        <Tooltip label="Halaman Pertama">
          <IconButton
            onClick={() => changeQuery({ page: 1 })}
            isDisabled={page === 1}
            icon={<FaAngleDoubleLeft h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Halaman Sebelumnya">
          <IconButton
            onClick={() => changeQuery({ page: page - 1 })}
            isDisabled={page === 1}
            icon={<FaAngleLeft h={6} w={6} />}
          />
        </Tooltip>
      </Flex>
      <Flex>
        <Tooltip label="Halaman Selanjutnya">
          <IconButton
            onClick={() => changeQuery({ page: page + 1 })}
            isDisabled={page === lastPage}
            icon={<FaAngleRight h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Halaman Terakhir">
          <IconButton
            onClick={() => changeQuery({ page: lastPage })}
            isDisabled={page === lastPage}
            icon={<FaAngleDoubleRight h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  limit: PropTypes.number,
  changeQuery: PropTypes.func,
  total: PropTypes.number,
};

export default Pagination;
