
import CloseButton from '../../../../../../images/CloseIcon.png';
export default function NewCard() {
    return (
      <>
        <input
          className="form__input form__fild--place"
          id="place"
          maxLength="30"
          minLength="2"
          name="nameTitle"
          placeholder="Titulo"
          required
          type="text"
        />
        <span className="form__error place-error" />
        <input
          className="form__input form__input-about form__fild--place"
          id="urlLink"
          name="urlLink"
          placeholder="Url Imagen"
          required
          type="url"
        />
      </>
    );
}