import { styled } from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h1>시계열 차트</h1>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 30px 0;

  & > h1 {
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
    font-weight: bolder;
  }
`;
