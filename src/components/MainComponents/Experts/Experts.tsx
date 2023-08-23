import { text } from "stream/consumers";
import { Button } from "../../common/Button/Button";
import { StaticticsItem } from "../../common/StaticticsItem/StaticticsItem";
import TextBlock from "../../common/TextBlock/TextBlock";
import "./Experts.scss";

export function Experts() {
  const text = `Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.`;

  return (
    <section className="experts">
      <div className="experts__container">
        <div className="experts__statictics statictics-experts">
          <div className="statictics-experts__body body-statictics-experts">
            <StaticticsItem text="Users" value="2m" />
            <StaticticsItem text="Countries" value="78" />
            <StaticticsItem text="Medical experts" value="10,000+" />
          </div>
          <div className="decor decor_5 statictics-experts_decor_1"></div>
          <div className="decor decor_3 statictics-experts_decor_2"></div>
          <div className="decor decor_2 statictics-experts_decor_3"></div>
        </div>
        <div className="experts__body">
          <div className="experts__content">
            <TextBlock
              className="experts__text-block"
              title={
                <>
                  Talk to <span className="highlighted_blue">experts.</span>
                </>
              }
              text={text}
            >
              <Button text="Features" href="#" />
            </TextBlock>
          </div>
          <div className="experts__video">
            <iframe
              src="https://www.youtube.com/embed/FON2SycdqaM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
