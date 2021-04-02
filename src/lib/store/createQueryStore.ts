import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from 'react-query';
import { TError, TResponse } from '../service/api.types';

export const createQueryStore = (
  key,
  promise,
  config = null
) => (): UseQueryResult<TResponse, TError> => {
  return useQuery(key, promise, config);
};

export const createMutateStore = (
  promise,
  config = null
) => (): UseMutationResult => {
  return useMutation(promise, config);
};
