import icon from "../../../assets/main//get-started/2.svg";
import "./GetStartedVideo.scss";

export function GetStartedVideo() {
  return (
    <div className="get-started__video">
      <a href="#" className="video-get-started">
        <div className="video-get-started__icon">
          <img src={icon} alt="watch video icon" />
        </div>
        <div className="video-get-started_body">
          <div className="video-get-started_title">Stay safe with GoCorona</div>
          <div className="video-get-started_text">Watch Video</div>
        </div>
      </a>
    </div>
  );
}
