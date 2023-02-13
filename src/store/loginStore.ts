import { create } from "zustand";

interface State {
  isLogin: boolean;
  loginAction: () => void;
  logoutAction: () => void;
}

const useLoginStore = create<State>()((set) => ({
  isLogin: false,
  loginAction: () => set({ isLogin: true }),
  logoutAction: () => set({ isLogin: false }),
}));

export default useLoginStore;
