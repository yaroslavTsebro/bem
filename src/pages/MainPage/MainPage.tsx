import { Footer } from "../../components/FooterComponents/Footer/Footer";
import { Header } from "../../components/HeaderComponents/Header/Header";
import { Main } from "../../components/MainComponents/Main/Main";
import "./MainPage.scss";

export function MainPage() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
