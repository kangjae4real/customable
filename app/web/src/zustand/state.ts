interface DrawerStates {
  open: boolean;
}
interface DrawerActions {
  toggleOpen: () => void;
  resetDrawerState: () => void;
}

export const drawerInitialState: DrawerStates = {
  open: false,
};
export type DrawerState = DrawerStates & DrawerActions;
