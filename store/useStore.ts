import { create } from "zustand";
import { StoreState } from "@/types";

const useStore = create<StoreState>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
}));

export default useStore;
