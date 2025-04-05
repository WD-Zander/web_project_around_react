import deleteBtn from "../../../../images/Trash.png";
import likeBtn from "../../../../images/card-button/likebutton.png";

export default function Card(props) {
    const { name, link } = props.card;
  
    return (
      <div className="card"> 
        <img src={link} alt="image" className="card__image" />
        <button className="card__trash" id="remove_button">
          <img src={deleteBtn} alt="image" className="image__trash" />
        </button>
  
        <div className="Card__contenedor">
          <h2 className="card__titel">{name}</h2>
          <button className="template__button">
            <img
              src={likeBtn}
              alt="image"
              className="card__button"
            />
          </button>
        </div>
      </div>
    );
  }
  