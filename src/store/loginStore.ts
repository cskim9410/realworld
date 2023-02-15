import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  isLogin: boolean;
  loginAction: () => void;
  logoutAction: () => void;
}

const useLoginStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        isLogin: false,
        loginAction: () => set({ isLogin: true }),
        logoutAction: () => set({ isLogin: false }),
      }),
      {
        name: "login-storage",
      }
    )
  )
);

export default useLoginStore;
