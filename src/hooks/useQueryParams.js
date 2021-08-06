import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const removeDefaultParamsFromQuery = (defaultQuery, params) => {
  const _default = defaultQuery;
  return Object.keys(params).reduce((_params, key) => {
    _params[key] = params[key] === _default[key] ? undefined : params[key];
    return _params;
  }, {});
};

export const useQueryParams = (defaultQuery) => {
  const { push } = useHistory();
  const location = useLocation();

  const initialValue = queryString.parse(location.search, {
    parseNumbers: true,
    parseBooleans: true,
  });

  const [queryParams, setQueryParams] = useState({
    ...defaultQuery,
    ...initialValue,
  });

  const _pushQueryParams = (query) => {
    const _mergedQuery = { ...queryParams, ...query };
    const _withDefaultParams = removeDefaultParamsFromQuery(
      defaultQuery,
      _mergedQuery
    );
    const _queryString = queryString.stringify(_withDefaultParams);
    const _pathToPush = `${location.pathname}?${_queryString}`;
    push(_pathToPush);
  };

  useEffect(() => {
    let parsed = queryString.parse(location.search, {
      parseNumbers: true,
      parseBooleans: true,
    });
    const withDefaultState = {
      ...defaultQuery,
      ...parsed,
    };
    const toSet = {
      ...queryParams,
      ...withDefaultState,
    };
    setQueryParams(toSet);
    // Removing this will cause compiler to complain about `queryParams` not being included in the deps array. But
    // including it will cause the hook to re-render continuously, causing performance issues.
    // eslint-disable-next-line
  }, [location.search]);

  return {
    query: queryParams,
    push: _pushQueryParams,
  };
};
