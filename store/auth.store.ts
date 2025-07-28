import { create } from "zustand";

import { User } from "@/type";
import { getCurrentUser } from "@/lib/appwrite";

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;

  setIsAuthenticated: (val: boolean) => void;
  setUser: (user: User | null) => void;
  setIsLoading: (loading: boolean) => void;

  fetchAuthenticatedUser: () => Promise<void>;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  setIsAuthenticated: (val) => set({ isAuthenticated: val }),
  setUser: (user) => set({ user }),
  setIsLoading: (val) => set({ isLoading: val }),
  fetchAuthenticatedUser: async () => {
    set({ isLoading: true });

    try {
      const user = await getCurrentUser();

      if (user) {
        set({ isAuthenticated: true, user: user as User });
      } else {
        set({ isAuthenticated: false, user: null });
      }
    } catch (error) {
      console.log("Error Fetching User", error);
      
      set({ isAuthenticated: false, user: null });
    } finally {
      set({isLoading: false})
    }
  },
}));

export default useAuthStore;
