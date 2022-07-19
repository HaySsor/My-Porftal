import React, { useContext, useState } from 'react';

export const UserContext = React.createContext({
  heandleUserDate: () => {},
  isLogged: false,
  handlePost: () => {},
});

function UserProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [displayPost, setDisplayPost] = useState({
    title: 'Witam',
    text1: 'Kliknij artukuł po boku i zagłąb się w temat ',
    text2: ' ',
    img: '',
  });

  const heandleUserDate = ({ login, password }) => {
    console.log(`login to : ${login} a hasło to ${password}`);
    setIsLogged(true);
  };

  const handlePost = (titleGettedPost, text1GettedPost, text2GettedPost, GettedImg) => {
    setDisplayPost({
      title: titleGettedPost,
      text1: text1GettedPost,
      text2: text2GettedPost,
      img: GettedImg,
    });
  };

  return (
    <UserContext.Provider
      value={{
        heandleUserDate,
        isLogged,
        handlePost,
        displayPost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
