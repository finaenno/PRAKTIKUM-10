import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BreadcrumbSection({ data }) {
  return (
    <Breadcrumb m="8" separator={<FaAngleRight />} fontSize="sm">
      {data.map(({ name, url, isLoading }, index) => {
        return (
          <BreadcrumbItem key={`${index}-${name}`} isCurrentPage={!url}>
            {isLoading ? (
              <Skeleton width="100px" height="10px" />
            ) : !url ? (
              <Text color="gray.400">{name}</Text>
            ) : (
              <BreadcrumbLink as={Link} to={url} color="blue.600">
                {name}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
