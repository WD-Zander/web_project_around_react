

import logo from '../../images/logo.png';
export default function header() {
    return (
      <>
        <header className="header">
          <img alt="image" className="header__image" src={logo} />
        </header>
        <hr className="line" />
      </>
    );
  }
  
