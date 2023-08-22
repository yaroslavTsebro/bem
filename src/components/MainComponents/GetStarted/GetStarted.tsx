import image from "../../../assets/main/1.svg";
import { Button } from "../../common/Button/Button";

export function GetStarted() {
  return (
    <div className="get-started">
      <section className="get-started__container">
        <div className="get-started__content">
          <div className="get-started__text-block text-block">
            <h2 className="text-block__title">
              Take care of yours family’s{" "}
              <span className="highlighted">health.</span>
            </h2>
            <div className="text-block__text">
              All in one destination for COVID-19 health queries. Consult
              10,000+ health workers about your concerns.
            </div>
            <Button text="GET STARTED" href="#" />
          </div>
        </div>
        <div className="get-started__image">
          <img src={image} alt="doctor" />
        </div>
      </section>
    </div>
  );
}
