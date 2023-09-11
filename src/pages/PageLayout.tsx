import { ReactNode } from 'react';
import { styled } from 'styled-components';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
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
