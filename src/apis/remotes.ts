import { http } from './http';
import { Chart } from '../types';

export const fetchCharts = () => http.get<Chart>('/chart');
