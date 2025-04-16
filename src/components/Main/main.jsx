
import React, { useContext } from 'react';
import avatar from "../../images/avatar.png";
import vectorPen from "../../images/Vector-pen.png";
import vector from "../../images/Vector.png";
import Popup from "./components/Popup/Popup";
import EditAvatar from "./components/Popup/Form/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/Form/EditProfile/EditProfile";
import NewCard from "./components/Popup/Form/NewCard/NewCard";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup";
import {api} from "../../utils/api"
import CurrentUserContext from '../contexts/CurrentUserContext'; // ajusta la ruta si es necesario


import { useEffect, useState } from "react";


export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null); // Añadimos el estado para la tarjeta seleccionada
  const [cards, setCards] = useState([]); //  1. Añado el estado. Para consultar la API
  const currentUser = useContext(CurrentUserContext);



  const newCardPopup = { title: "New Place", children: <NewCard /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit Photo", children: <EditAvatar /> };

useEffect(() => { api.getInitialCards() // 2 Uso UseEffecet para que hace una solicitud a la API
  .then((res) => {
    setCards(res);
  })
  .catch((err) => {
    console.log(err);
  }
  );
}
  , []); // El segundo argumento vacío asegura que el efecto se ejecute solo una vez al montar el componente
  // Simulando una tarjeta para el ejemplo 



  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleOpenPopupWhitImage(card) {
    setSelectedCard(card); // Actualizamos selectedCard con la tarjeta
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null); // Limpiamos selectedCard al cerrar el popup
  }

  function handleCardLike(card) {
    const isLiked = card.likes?.some(user => user._id === currentUser._id) || false;
  
    api
      .like(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(err));
  }
  

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error('Error al eliminar la tarjeta:', error);
    }
  }


  return (
    <>
      <main>
        <section className="section">
          <div className="btn__avatar">
            <img
              alt="edit avatar"
              className="pen__image-avatar"
              onClick={() => handleOpenPopup(editAvatarPopup)}
              src={vectorPen}
            />
            <img alt="avatar" className="section_avatar" src={currentUser.avatar} />
          </div>
          <div className="section__name">
            <div className="section__container">
              <h1 className="section__profile-info">{currentUser.name}</h1>
              <button className="section__edit">
                <img
                  alt="edit profile"
                  className="pen__image"
                  onClick={() => handleOpenPopup(editProfilePopup)}
                  src={vectorPen}
                />
              </button>
            </div>
            <h2 className="section__profile-tag">{currentUser.about}</h2>
          </div>
          <div
            className="section__button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img alt="add new card" className="button__image" src={vector} />
          </div>

          {popup && (
            <Popup onClose={handleClosePopup} title={popup.title}>
              {popup.children}
            </Popup>
          )}
        </section>

        <div className="cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopupWhitImage}
              onCardLike={handleCardLike}        
              onCardDelete={handleCardDelete}
            />
          ))}
        </div>
      </main>

      <ImagePopup card={selectedCard} onClose={handleClosePopup} />
    </>
  );
}
