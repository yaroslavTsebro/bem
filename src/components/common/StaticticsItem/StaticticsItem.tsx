import "./StaticticsItem.scss";

interface StaticticsItemProps {
  value: string;
  text: string;
}

export function StaticticsItem(props: StaticticsItemProps) {
  return (
    <div className="body-statictics-experts__item">
      <div className="body-statictics-experts__value">{props.value}</div>
      <div className="body-statictics-experts__text">{props.text}</div>
    </div>
  );
}
