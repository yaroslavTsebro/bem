import { Button, ButtonProps } from "../Button/Button";

type ButtonBlueProps = Omit<ButtonProps, "isBlue">;

export function ButtonBlue(props: ButtonBlueProps) {
  return <Button isBlue={true} text={props.text} href={props.href} />;
}
