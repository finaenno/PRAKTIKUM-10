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

export const Pagination = () => {
  return (
    <Flex alignItems="center">
      <Flex alignItems="center" flex="1">
        <Text flexShrink="0" mr={8} color="gray.600">
          Ditampilkan{' '}
          <Text fontWeight="bold" as="span">
            10
          </Text>{' '}
          dari{' '}
          <Text fontWeight="bold" as="span">
            0
          </Text>
        </Text>
      </Flex>
      <Flex alignItems="center" mr={2}>
        <Text flexShrink="0">Show:</Text>{' '}
        <Select ml={2} w={24} value={10} onChange={() => {}}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
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
          max={10}
          onChange={() => {}}
          defaultValue={1}
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
            onClick={() => {}}
            isDisabled={() => {}}
            icon={<FiChevronsLeft h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => {}}
            isDisabled={false}
            icon={<FiChevronLeft h={6} w={6} />}
          />
        </Tooltip>
      </Flex>
      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            onClick={() => {}}
            isDisabled={false}
            icon={<FiChevronRight h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            onClick={() => {}}
            isDisabled={false}
            icon={<FiChevronsRight h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Pagination;
