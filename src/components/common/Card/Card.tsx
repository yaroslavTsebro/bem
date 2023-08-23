import "./Card.scss";

interface CardProps {
  className?: string;
  title: string;
  text: string;
  src: string;
}

export function Card(props: CardProps) {
  const classes = "item " + props.className;
  return (
    <div className={classes}>
      <div className="item__icon">
        <img src={props.src} alt="Icon" />
      </div>
      <div className="item__title">{props.title}</div>
      <div className="item__text">{props.text}</div>
    </div>
  );
}
