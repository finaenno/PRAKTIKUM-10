import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { ProtectedRoutes } from '../../routes';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function BreadcrumbSection() {
  const breadcrumbs = useBreadcrumbs(ProtectedRoutes);
  if (breadcrumbs.length === 1) return <></>;
  return (
    <Breadcrumb m="8" separator={<FiChevronRight />} fontSize="sm">
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        const isCurrent = index === breadcrumbs.length - 1;
        return (
          <BreadcrumbItem key={match.url} isCurrentPage={isCurrent}>
            {isCurrent ? (
              <Text color="gray.400">{breadcrumb}</Text>
            ) : (
              <BreadcrumbLink as={Link} to={match.url} color="blue.600">
                {breadcrumb}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
