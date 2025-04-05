

import CloseBtn from '../../../../images/CloseIcon.png';
export default function Popup(props) {
    //los hijos son el contenido de la ventana emergente
    console.log(props);
    const {onClose, title, children} = props;
    return (
        <div className="popup">
        <div className="popup__overlay">
          <div className="popup__card">
            <img alt="image" className="popup__image" src=" " />
            <div className="popoup__title-container">
              <h2 className="popup__titel">{title}</h2> 
              
            </div>
            {children}
            <div className="popup__button-container">
              <button className="popup__button">
                <img
                  alt="image"
                  className="popup__close"
                  src={CloseBtn}
                  onClick={onClose} 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    )
  }