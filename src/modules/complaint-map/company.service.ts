import { AxiosResponse } from 'axios'
import apiClient from '../../lib/service/api.service'

export function postCompany(data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    if (data) {
      setTimeout(() => resolve({ ok: true, data: true }), 1000)
    } else {
      setTimeout(() => reject({ ok: false, error: true }), 1000)
    }
  })
  // return apiClient.post(LOGIN, credentials);
}
