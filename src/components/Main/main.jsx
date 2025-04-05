import avatar from "../../images/avatar.png";
import vectorPen from "../../images/Vector-pen.png";
import vector from "../../images/Vector.png";
import Popup from  "./components/Popup/Popup";
import EditAvatar from "./components/Popup/Form/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/Form/EditProfile/EditProfile";
import NewCard from "./components/Popup/Form/NewCard/NewCard";
import Card from "./components/Card/Card"; 

import { useState } from "react";

export default function Main() {
  const [popup, setPopup] = useState(null);



  const newCardPopup = { title: "New Place", children: <NewCard /> };

  const editProfilePopup = { title: "Edit Profile", children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Edit Photo", children: <EditAvatar /> };


  const cards = [
    {
      isLiked: false,
      _id: '5d1f0611d321eb4bdcd707dd',
      name: 'Yosemite Valley',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:10:57.741Z',
    },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707de',
      name: 'Lake Louise',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:11:58.324Z',
    },
  ];
  


  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
    <section className="section">
      <div className="btn__avatar">
        <img alt="image" className="pen__image-avatar" onClick={()=>handleOpenPopup(editAvatarPopup)} src={vectorPen} />
        <img alt="avatar" className="section_avatar" src={avatar} />
      </div>
      <div className="section__name">
        <div className="section__container">
          <h1 className="section__profile-info">Jacques Costeus</h1>
          <button className="section__edit">
            <img alt="image" className="pen__image" onClick={()=>handleOpenPopup(editProfilePopup)} src={vectorPen} />
          </button>
        </div>
        <h2 className="section__profile-tag">Explorador</h2>
      </div>
      <div className="section__button" onClick={() => handleOpenPopup(newCardPopup)} >
        <img alt="image" className="button__image"  src={vector} />
      </div>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </section>

    
    {/* <main className="main">
      
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
  
    </main> */}
    </>
  );
}
