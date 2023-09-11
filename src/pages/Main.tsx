import { styled } from 'styled-components';

export default function Main() {
  return <Wrapper>메인</Wrapper>;
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
