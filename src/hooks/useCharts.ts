import { useState, useEffect } from 'react';
import { getCharts } from '../apis/remotes';
import { RowChart, Chart } from '../types';

interface ChartType extends Chart {
  date: string;
}

const parseData = (rowData: { [key: string]: Chart }) =>
  Object.entries(rowData).reduce(
    (acc: ChartType[], [key, value]) => [...acc, { ...value, date: key }],
    []
  );

const useCharts = () => {
  const [charts, setCharts] = useState<ChartType[]>();

  useEffect(() => {
    const getChartData = async () => {
      const rowCharts: RowChart = await getCharts();
      setCharts(parseData(rowCharts[0]));
    };
    void getChartData();
  }, []);

  return charts;
};

export default useCharts;
