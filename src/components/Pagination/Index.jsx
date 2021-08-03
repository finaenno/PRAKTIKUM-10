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
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronRight,
} from 'react-icons/fi';
import PropTypes from 'prop-types';

export const Pagination = ({ page, setPage, perPage, setPerPage, total }) => {
  const lastPage = Math.floor(total / perPage);
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
        <Text flexShrink="0">Show:</Text>{' '}
        <Select
          ml={2}
          w={24}
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex alignItems="center" mr={2}>
        <Text flexShrink="0">Go to page:</Text>{' '}
        <NumberInput
          ml={2}
          mr={8}
          w={24}
          min={1}
          max={lastPage}
          onChange={(value) => {
            setPage(Number(value));
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
        <Tooltip label="First Page">
          <IconButton
            onClick={() => setPage(1)}
            isDisabled={page === 1}
            icon={<FiChevronsLeft h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => setPage(page - 1)}
            isDisabled={page === 1}
            icon={<FiChevronLeft h={6} w={6} />}
          />
        </Tooltip>
      </Flex>
      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            onClick={() => setPage(page + 1)}
            isDisabled={page === lastPage}
            icon={<FiChevronRight h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            onClick={() => setPage(lastPage)}
            isDisabled={page === lastPage}
            icon={<FiChevronsRight h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  perPage: PropTypes.number,
  setPerPage: PropTypes.func,
  total: PropTypes.number,
};

export default Pagination;
