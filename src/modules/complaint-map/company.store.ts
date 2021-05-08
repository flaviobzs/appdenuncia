import { createMutateStore } from '../../lib/store/createQueryStore'
import { postCompany } from './company.service'

export const useCompany = createMutateStore('company', postCompany)
