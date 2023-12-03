import styled from "@emotion/styled";

const Container = styled.div``;

const ChildrenContainer = styled.div``;

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}
