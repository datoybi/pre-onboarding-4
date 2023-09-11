import { ReactNode } from 'react';
import { styled } from 'styled-components';
import Header from '../components/Header';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <>{children}</>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
