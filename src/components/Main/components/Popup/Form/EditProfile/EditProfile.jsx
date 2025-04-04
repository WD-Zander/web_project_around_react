export default function EditProfile() {
  return (
    <form className="form" id="form__profile">
      <div className="form__fild">
        <fieldset className="form__fieldset">
          <h2 className="form__title">Editar Perfil</h2>
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
          <span className="form__error description-error" />
          <button className="submit__button" type="submit">
            Guardar
          </button>
        </fieldset>
        <img alt="image" className="form__close" src="../image/CloseIcon.png" />
      </div>
    </form>
  );
}
