import { create } from "zustand";
import { DrawerState, drawerInitialState } from "@/zustand/state";
import { createSelectors } from "@/utils/zustand";
import { devtools, persist } from "zustand/middleware";

const drawerStoreBase = create<DrawerState>()(
  devtools(
    persist(
      (setState) => ({
        ...drawerInitialState,
        toggleOpen: () => setState((state) => ({ open: !state.open })),
        resetDrawerState: () => setState(drawerInitialState),
      }),
      { name: "drawerStore" },
    ),
  ),
);

const useDrawerStore = createSelectors(drawerStoreBase);

export default useDrawerStore;
