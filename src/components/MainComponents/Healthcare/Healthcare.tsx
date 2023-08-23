import { Card } from "../../common/Card/Card";
import TextBlock from "../../common/TextBlock/TextBlock";
import icon1 from "../../../assets/main/healthcare/icons/1.svg";
import icon2 from "../../../assets/main/healthcare/icons/2.svg";
import icon3 from "../../../assets/main/healthcare/icons/3.svg";
import "./Healthcare.scss";

export function Healthcare() {
  const text = `Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.`;
  return (
    <section className="healthcare">
      <div className="healthcare__container">
        <TextBlock
          className="healthcare__text-block text-block_center"
          title={
            <>
              <span className="highlighted_red">Healthcare</span> at your
              Fingertips.
            </>
          }
          text={text}
        ></TextBlock>

        <div className="healthcare__items">
          <Card
            className="healthcare__item"
            title="Symptom Checker"
            text="Check if you are infected by COVID-19 with our Symptom Checker"
            src={icon1}
          />
          <Card
            className="healthcare__item"
            title="24x7 Medical support"
            text="Check if you are infected by COVID-19 with our Symptom Checker"
            src={icon2}
          />
          <Card
            className="healthcare__item"
            title="Conditions"
            text="Bringing premium healthcare features to your fingertips."
            src={icon3}
          />
        </div>
      </div>
    </section>
  );
}
