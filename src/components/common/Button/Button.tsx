import "./Button.scss"

export interface ButtonProps {
  isBlue?: boolean;
  href: string;
  text: string;
}

export function Button(props: ButtonProps) {
  const className = "button " + (props.isBlue === true ? " button_blue" : "");
  return (
    <a href={props.href} className={className}>
      {props.text}
    </a>
  );
}
