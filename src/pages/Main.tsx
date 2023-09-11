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
      <FilterList>
        <li>
          <button>전체 헤제</button>
        </li>
        <li>
          <button>성북구</button>
        </li>
        <li>
          <button>강남구</button>
        </li>
        <li>
          <button>노원구</button>
        </li>
        <li>
          <button>중랑구</button>
        </li>
      </FilterList>

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

const FilterList = styled.ul`
  margin: 30px 0 50px 0;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid black; */
  width: 90%;
  max-width: 700px;

  & > li > button {
    padding: 10px;
    cursor: pointer;
    border-radius: 14px;
  }

  & > li > button:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out 0s;
  }

  & > li > button:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;
