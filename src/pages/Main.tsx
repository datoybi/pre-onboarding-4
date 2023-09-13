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
  Cell,
  Legend,
} from 'recharts';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import useCharts from '../hooks/useCharts';
import FilterList from '../components/FilterList';
import { ComposedChartPayload } from '../types';
import CustomTooltip from '../components/CustomTooltip';

export default function Main() {
  const chartData = useCharts();
  const [selectedList, setSelectedList] = useState<string[]>([]);
  console.log(chartData);
  console.log(selectedList);

  const handleChartClick = ({ activePayload }: ComposedChartPayload) => {
    const filterId = activePayload[0]?.payload?.id;

    // TODO: FilterList와 겹치는 코드! 리펙토링하기
    const hasId = selectedList.includes(filterId);
    if (hasId) {
      const nextFilterList = selectedList.filter(item => item !== filterId);
      setSelectedList(nextFilterList);
    }
    if (!hasId) {
      setSelectedList(prevSelected => [...prevSelected, filterId]);
    }
  };
  // TODO: style color 정리하기
  return (
    <Wrapper>
      <FilterList
        data={chartData}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      {/* TODO: Chart 컴포넌트로 분리하기 */}
      <ChartWrapper>
        <ResponsiveContainer>
          <ComposedChart
            data={chartData}
            onClick={handleChartClick as CategoricalChartFunc}
          >
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
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="value_bar"
              barSize={20}
              fill="#f1c40f"
              name="Bar"
            >
              {chartData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={
                    selectedList.includes(entry.id)
                      ? 'rgb(232, 76, 61)'
                      : '#f1c40f'
                  }
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
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
