import "./Footer.scss";
import google from "../../../assets/main/healthcare/apps/google.png";
import appStore from "../../../assets/main/healthcare/apps/app-store.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__items">
          <a className="footer__item">
            <img src={google} alt="Google play" />
          </a>
          <a className="footer__item">
            <img src={appStore} alt="Apple Store" />
          </a>
        </div>
      </div>
    </footer>
  );
}
