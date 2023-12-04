import styled from "@emotion/styled";
import AppBar from "@/components/AppBar";

const Container = styled.div`
  display: flex;
`;

const ChildrenContainer = styled.div``;

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <AppBar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}
