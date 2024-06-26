'use client'
import { redirect } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import { createContext, useState } from "react";

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  signOut: () => void;
}

interface User {
  name: string;
  email: string;
  permissions: string[];
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
  signOut: () => null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { 'nextauth.token': token } = parseCookies()
  console.log('token', token);

  const signOut = () => {
    destroyCookie(undefined, 'nextauth.token')
    destroyCookie(undefined, 'nextauth.refreshToken')
    window.location.reload()
    redirect('/auth/signin')
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};