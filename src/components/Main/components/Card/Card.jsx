import deleteBtn from "../../../../images/Trash.png";
import likeBtn from "../../../../images/nolikebutton.svg";
import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function Card({ card, handleOpenPopup, onCardLike, onCardDelete }) {

  const { name, link } = card;
  const currentUser = useContext(CurrentUserContext);

  const ImagePopup = {
    name: name,
    link: link,
  };

  const isLiked =
    card.likes && card.likes.some((user) => user._id === currentUser._id);

  const cardLikeButtonClassName = `card__button${
    isLiked ? "card__button_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
    console.log("like?")
  }
  
  function handleDeleteClick() {
    onCardDelete(card);
  }
 
  return (
    <div className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={() => handleOpenPopup(ImagePopup)}
      />

      <button className="card__trash" id="remove_button" onClick={handleDeleteClick}>
        <img src={deleteBtn} alt="delete" className="image__trash" />
      </button>

      <div className="Card__contenedor">
        <h2 className="card__titel">{name}</h2>
        <button className="template__button" onClick={handleLikeClick}>
          <img src={likeBtn} alt="like" className={cardLikeButtonClassName} />
        </button>
      </div>
    </div>
  );
}