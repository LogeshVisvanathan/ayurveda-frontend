import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'farmer' | 'consumer' | 'lab' | 'admin' | null;

interface AuthState {
  userRole: UserRole;
  userEmail: string | null;
  isAuthenticated: boolean;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
  setUserRole: (role: UserRole) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userRole: null,
      userEmail: null,
      isAuthenticated: false,
      login: (email: string, role: UserRole) => {
        set({
          userEmail: email,
          userRole: role,
          isAuthenticated: true,
        });
      },
      logout: () => {
        set({
          userEmail: null,
          userRole: null,
          isAuthenticated: false,
        });
      },
      setUserRole: (role: UserRole) => {
        set({ userRole: role });
      },
    }),
    {
      name: 'auth-store',
    }
  )
);
