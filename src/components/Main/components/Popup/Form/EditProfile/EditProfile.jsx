import CloseButton from '../../../../../../images/CloseIcon.png';
export default function EditProfile() {
  return (
    <>
      <input
        className="form__input"
        id="name"
        maxLength="40"
        minLength="2"
        name="name"
        placeholder="Nombre"
        required
        type="text"
      />
      <span className="form__error name-error" />
      <input
        className="form__input form__input-about"
        id="description"
        maxLength="40"
        minLength="2"
        name="about"
        placeholder="Acerca de mi"
        required
        type="text"
      />
    </>
  );
}
