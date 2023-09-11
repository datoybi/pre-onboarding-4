import { useState, useEffect } from 'react';
import { getCharts } from '../apis/remotes';
import { RowChart, Chart, IChart } from '../types';

const parseData = (rowData: { [key: string]: Chart }) =>
  Object.entries(rowData).reduce(
    (acc: IChart[], [key, value]) => [...acc, { ...value, date: key }],
    []
  );

const useCharts = (): IChart[] => {
  const [charts, setCharts] = useState<IChart[]>([]);

  useEffect(() => {
    const getChartData = async () => {
      const rowCharts: RowChart = await getCharts();
      if (Object.keys(rowCharts).length > 0) setCharts(parseData(rowCharts[0]));
    };
    void getChartData();
  }, []);

  return charts;
};

export default useCharts;
