import { AxiosResponse } from 'axios';
import apiClient from '../../lib/service/api.service';
import { TCompany } from './company.types';

const company = 'customer/company';

export function postCompany(data: TCompany): Promise<TCompany> {
  return new Promise((resolve, reject) => {
    if (data) {
      // @ts-ignore
      setTimeout(() => resolve({ ok: true, data: true }), 1000);
    } else {
      setTimeout(() => reject({ ok: false, error: true }), 1000);
    }
  });
  // return apiClient.post(LOGIN, credentials);
}
