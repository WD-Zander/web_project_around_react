export default function EditAvatar() {
   return (
    <form className="form form__avatar" id="form__avatar">
    <div className="form__fild" id="">
      <fieldset className="form__fieldset">
        <h2 className="form__title">Cambiar Foto de Perfil</h2>
        <input
          className="form__input form__input-about form__fild--place"
          id="link-avatar"
          name="urlLinkavatar"
          placeholder="Url Imagen"
          required
          type="url"
        />
        <span className="form__error link-avatar-error" />
        <button className="submit__button" type="submit">
          Si
        </button>
      </fieldset>
      <img alt="image" className="form__close" src="../image/CloseIcon.png" />
    </div>
  </form>
  
   )

}