import { ReactNode } from "react";
import "./TextBlock.scss";

export interface BlockProps {
  className?: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
}

const TextBlock: React.FC<BlockProps> = (props) => {
  const classes = "text-block " + props.className;
  return (
    <div className={classes}>
      <h2 className="text-block__title">{props.title}</h2>
      <div className="text-block__text">{props.text}</div>
      {props.children}
    </div>
  );
};

export default TextBlock;
