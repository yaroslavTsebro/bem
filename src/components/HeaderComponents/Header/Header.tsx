import { ButtonBlue } from "../../common/ButtonBlue/ButtonBlue";
import { Menu } from "../Menu/Menu";
import "./Header.scss";
import logo from "../../../assets/logo.svg";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#main" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <Menu />
        <div className="header__button">
          <ButtonBlue href="#" text="DOWNLOAD" />
        </div>
      </div>
    </header>
  );
}
