import { styled } from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h1>시계열 차트</h1>
      <h2>2023-2-1일의 시계열 차트📈</h2>
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

  & > h2 {
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;
