import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Box, Heading, Button, Text } from '@chakra-ui/react';
import { FiRefreshCcw } from 'react-icons/fi';

const FallbackSuspense = () => {
  return (
    <Box role="alert" m="8">
      <Heading as="h2" size="lg" mb="4">
        Loading...
      </Heading>
    </Box>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Box role="alert" m="8">
      <Heading as="h2" size="lg" mb="4">
        Something went wrong:
      </Heading>
      <Box bg="gray.200" p="2" borderRadius="lg" mb="2">
        <Text as="pre">{error.message}</Text>
      </Box>
      <Text as="p" mb="4">
        Please contact administrator
      </Text>
      <Button leftIcon={<FiRefreshCcw />} onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Box>
  );
};

export const withSuspense = (Component) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<FallbackSuspense />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

export default withSuspense;
