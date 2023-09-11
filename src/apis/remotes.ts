import { http } from './http';
import { RowChart } from '../types';

// export const fetchCharts = () => http.get<RowChart[]>('/chart');

export function getCharts() {
  return http.get<RowChart>('/chart');
}
