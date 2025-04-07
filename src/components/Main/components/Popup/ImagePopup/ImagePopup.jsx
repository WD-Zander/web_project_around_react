import CloseButton from "../../../../../images/icone-x-noir.png";
export default function ImagePopup(props) {
    const { onClose, card } = props;
  
    return (
      <>
        <div className="popup popup__open">
       
        
            {card && (
              <div className="popup__card">
                <img alt={card.name} className="popup__image" src={card.link} />
                <div className="popou__title-container">
                  <h2 className="popup__titel">{card.name}</h2>
                </div>
                <div className="popup__button-container">
                  <button className="popup__button">
                    <img
                      alt="image"
                      className="popup__close"
                      src={CloseButton}
                      onClick={onClose}
                    />
                  </button>
                </div>
              </div>
            )}
            
            </div>
         
       
       
      </>
    );
  }