export default function NewCard() {
    return (
        <form className="form form__new-place" id="form__new-place">
  <div className="form__fild form__fild--place">
    <fieldset className="form__fieldset form__fild--place">
      <h2 className="form__title">Nuevo Lugar</h2>
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
      <span className="form__error urlLink-error" />
      <button className="submit__button form__fild--place" type="submit">
        Guardar
      </button>
    </fieldset>
    <img
      alt="image"
      className="form__close form__close-place"
      src="../image/CloseIcon.png"
    />
  </div>
</form>

    )
}