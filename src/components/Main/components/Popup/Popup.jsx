import CloseBtn from "../../../../images/CloseIcon.png";
export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  
  const { onClose, title, children } = props;
  return (
    <div className="form">
      <div className="form__fild">
        <div className="form__fieldset">
          <img alt="image" className="form__close" src={CloseBtn} onClick={onClose} />
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="submit__button form__fild--place" disabled>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
