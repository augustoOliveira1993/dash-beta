'use client'
import { AuthContext } from '@/contexts/AuthContext';
import {
  createContext,
  ReactNode,
  useContext
} from 'react';

interface UserContextType {
  can: (permission: string) => boolean;
}

const UserContext = createContext<UserContextType>({
  can: () => false,
});

export const AbilityProvider = ({ children }: { children: ReactNode }) => {

  const { user } = useContext(AuthContext);

  const can = (permission: string) => {
    return user?.permissions.includes(permission) || false;
  };

  return (
    <UserContext.Provider value={{ can }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
