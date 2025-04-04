export default function Popup(props) {
    //los hijos son el contenido de la ventana emergente
    const {title, children} = props;
    return (
        <div className="popup">
        <div className="popup__overlay">
          <div className="popup__card">
            <img alt="image" className="popup__image" src=" " />
            <div className="popou__title-container">
              <h2 className="popup__titel">{title}</h2> 
              {children}
            </div>
            <div className="popup__button-container">
              <button className="popup__button">
                <img
                  alt="image"
                  className="popup__close"
                  src="../image/icone-x-noir.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    )
  }