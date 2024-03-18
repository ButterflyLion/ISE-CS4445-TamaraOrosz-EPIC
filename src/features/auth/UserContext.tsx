import { createContext, useContext, useState, useEffect } from "react";
import jsSHA from "jssha";
import { UserBasicInfo } from "../../types/UserTypes";

type UserContextValue = {
  user: UserBasicInfo | null;
  login: (userData: UserBasicInfo) => void;
  logout: () => void;
  generateUserId: (email: string, password: string) => string;
};

export const UserContext = createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserBasicInfo | null>(null);

  // Check if user is already logged in from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const generateUserId = (email: string, password: string): string => {
    const data = email + ":" + password;
    const shaObj = new jsSHA("SHA-256", "TEXT");
    shaObj.update(data);
    return shaObj.getHash("HEX");
  };

  const signup = (userData: UserBasicInfo) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const login = (userData: UserBasicInfo) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, generateUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
};
