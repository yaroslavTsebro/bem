import doctor from "../../../assets/main/get-started/1.svg";
import { Button } from "../../common/Button/Button";
import TextBlock from "../../common/TextBlock/TextBlock";
import { GetStartedVideo } from "../GetStartedVideo/GetStartedVideo";
import "./GetStarted.scss";

export function GetStarted() {
  const text = `All in one destination for COVID-19 health queries. Consult 10,000+ health workers about your concerns.`;

  return (
    <section className="get-started">
      <div className="get-started__container">
        <div className="get-started__content">
          <TextBlock
            className="get-started__text-block"
            title={
              <>
                Take care of yours family’s{" "}
                <span className="highlighted_blue">health.</span>
              </>
            }
            text={text}
          >
            <Button text="GET STARTED" href="#" />
          </TextBlock>
        </div>
        <div className="get-started__image">
          <img src={doctor} alt="doctor" />
        </div>
        <GetStartedVideo />
      </div>
    </section>
  );
}
