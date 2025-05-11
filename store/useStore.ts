import { create } from "zustand";
import { StoreState } from "@/types";

const useStore = create<StoreState>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
