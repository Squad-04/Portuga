import React, { useState, createContext } from 'react';

export const UserContext = createContext({
  userInfo: {
    nome: '',
    email: '',
    senha: '',
    id: undefined,
  },
  setUserInfo: () => null,
});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
};

export default UserContext;