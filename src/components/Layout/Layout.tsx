import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Layout(props: LayoutProps) {
  return (
    <LayoutContainer>
      <ContentWrapper>{props.children}</ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
}

export { Layout };
