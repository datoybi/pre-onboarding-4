/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { styled } from 'styled-components';

import { TooltipProps } from 'recharts';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>): JSX.Element | null => {
  if (active && payload && payload.length) {
    const [bar, _] = payload;

    return (
      <Wrapper className="custom-tooltip">
        <p className="desc">{bar.payload.id}</p>
        <p className="desc">Area: {bar.payload.value_area}</p>
        <p className="desc">Bar: {bar.payload.value_bar}</p>
      </Wrapper>
    );
  }

  return null;
};

export default CustomTooltip;

const Wrapper = styled.div`
  padding: 15px;
  border-radius: 14px;
  opacity: 1;
  background-color: #f0f0f0;
`;
