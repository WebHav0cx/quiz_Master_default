import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const MOCK_USER = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  role: "admin",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("quiz_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("quiz_user", JSON.stringify(user));
    else localStorage.removeItem("quiz_user");
  }, [user]);

  const login = (useMock = true) => {
    if (useMock) {
      setUser(MOCK_USER);
      return MOCK_USER;
    }
    // place for real login later
    return null;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
