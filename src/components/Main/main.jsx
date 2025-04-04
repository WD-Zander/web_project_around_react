import avatar from "../../images/avatar.png";
import vectorPen from "../../images/Vector-pen.png";
import vector from "../../images/Vector.png";
import Popup from "../Popup/Popup";
import EditAvatar from "./components/Popup/Form/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/Form/EditProfile/EditProfile";
import NewCard from "./components/Popup/Form/NewCard/NewCard";

import { useState } from "react";

export default function main() {
  const [popup, SetPopup] = useState(null);

  return (
    <section className="section">
      <div className="btn__avatar">
        <img alt="image" className="pen__image-avatar" src={vectorPen} />
        <img alt="avatar" className="section_avatar" src={avatar} />
      </div>
      <div className="section__name">
        <div className="section__container">
          <h1 className="section__profile-info">Jacques Costeus</h1>
          <button className="section__edit">
            <img alt="image" className="pen__image" src={vectorPen} />
          </button>
        </div>
        <h2 className="section__profile-tag">Explorador</h2>
      </div>
      <div className="section__button">
        <img alt="image" className="button__image" src={vector} />
      </div>
      {popup && (
        <popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </popup>
      )}
    </section>
  );
}
