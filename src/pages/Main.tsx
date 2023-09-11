import { styled } from 'styled-components';
import { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import useCharts from '../hooks/useCharts';
import FilterList from '../components/FilterList';

export default function Main() {
  const chartData = useCharts();
  const [selected, setSelected] = useState<string[]>([]);
  console.log(chartData);
  console.log(selected);

  return (
    <Wrapper>
      <FilterList data={chartData} setSelected={setSelected} />
      <ChartWrapper>
        <ResponsiveContainer>
          <ComposedChart data={chartData}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" tick={{ fontSize: '0.7rem' }} />
            <YAxis
              yAxisId="left"
              label={{ value: 'value_bar', position: 'top', offset: 20 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 150]}
              label={{ value: 'value_area', position: 'top', offset: 20 }}
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="value_bar"
              barSize={20}
              fill="#f1c40f"
              name="Bar"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              fill="#3598dc"
              stroke="#3598dc"
              name="Area"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
