import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, Toolbar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import useDrawerStore from "@/zustand/store";

interface StyledAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(({ open, ...props }: StyledAppBarProps) => <MuiAppBar {...props} />)`
  width: 100%;
  margin-left: 0;
  transition:
    width 0.5s,
    margin-left 0.5s;

  ${({ open }) =>
    open &&
    css`
      width: calc(100% - 240px);
      margin-left: 240px;
    `}
`;

const AppBarTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AppBarTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

interface AppBarProps {}

export default function AppBar(props: AppBarProps) {
  const drawerOpen = useDrawerStore.use.open();
  const toggleDrawer = useDrawerStore.use.toggleOpen();

  return (
    <StyledAppBar open={drawerOpen} position="fixed">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={() => toggleDrawer()}>
          <Menu />
        </IconButton>

        <AppBarTitleContainer>
          <AppBarTitle>Custom-able</AppBarTitle>
        </AppBarTitleContainer>
      </Toolbar>
    </StyledAppBar>
  );
}
