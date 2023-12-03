import styled from "@emotion/styled";

const Container = styled.header``;

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <span>header</span>
    </Container>
  );
}
