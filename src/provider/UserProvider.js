import React, { useContext, useState } from 'react';

export const UserContext = React.createContext({
  heandleUserDate: () => {},
  isLogged: false,
});

function UserProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const heandleUserDate = (value) => {
    const login = value.login;
    const password = value.password;
    console.log(`login to : ${login} a hasło to ${password}`);
    setIsLogged(true);
  };

  return (
    <UserContext.Provider
      value={{
        heandleUserDate,
        isLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
