import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Main from './Main/main';
import Footer from './Footer/Footer';
import '../index.css';
import CurrentUserContext from '../components/contexts/CurrentUserContext';
import { api } from '../utils/api'; // 
function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.error('Error al obtener datos del usuario:', err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
     
        <Header />
        <Main />
        <Footer />
    
    </CurrentUserContext.Provider>
  );
}

export default App;
