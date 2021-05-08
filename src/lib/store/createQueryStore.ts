import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult
} from 'react-query'
import { TError, TResponse } from '../service/api.types'

export const createQueryStore = (
  key: string,
  promise: any,
  config = {}
) => (): UseQueryResult<TResponse, TError> => {
  return useQuery(key, promise, config)
}

export const createMutateStore = (
  promise: any,
  config = {}
) => (): UseMutationResult => {
  return useMutation(promise, config)
}
