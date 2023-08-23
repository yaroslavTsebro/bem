import { Button } from "../../common/Button/Button";
import TextBlock from "../../common/TextBlock/TextBlock";
import mobile from "../../../assets/main/stay-safe/1.png";
import "./StaySafe.scss";

export function StaySafe() {
  const text = `24x7 Support and user friendly mobile platform to bring 
    healthcare to your fingertips. Signup and be a part of the new health culture.`;

  return (
    <section className="stay-safe">
      <div className="stay-safe__container">
        <div className="stay-safe__media">
          <div className="media-stay-safe">
            <div className="media-stay-safe__image">
              <img src={mobile} alt="mobile" />
            </div>
            <div className="decor decor_1 media-stay-safe__decor_1"></div>
            <div className="decor decor_4 media-stay-safe__decor_2"></div>
            <div className="decor decor_4 media-stay-safe__decor_3"></div>
          </div>
        </div>
        <div className="stay-safe__content">
          <TextBlock
            className="stay-safe__text-block"
            title={
              <>
                Stay safe with Go
                <span className="highlighted_red">Corona.</span>
              </>
            }
            text={text}
          >
            <Button text="Features" href="#" />
          </TextBlock>
        </div>
      </div>
    </section>
  );
}
