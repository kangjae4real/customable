import styled from "@emotion/styled";
import Header from "@/components/Header";

const Container = styled.div``;

const ChildrenContainer = styled.div``;

interface PageLayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

export default function PageLayout({ children, hideHeader }: PageLayoutProps) {
  return (
    <Container>
      {!hideHeader && <Header />}
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}
