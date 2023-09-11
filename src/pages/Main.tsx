import { styled } from 'styled-components';
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

export default function Main() {
  const chartData = useCharts();
  console.log(chartData);

  return (
    <Wrapper>
      <div style={{ width: '100%', height: '500px' }}>
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
      </div>
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
