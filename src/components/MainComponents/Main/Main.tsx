import { Experts } from "../Experts/Experts";
import { GetStarted } from "../GetStarted/GetStarted";
import { Healthcare } from "../Healthcare/Healthcare";
import { StaySafe } from "../StaySafe/StaySafe";
import "./Main.scss";

export function Main() {
  return (
    <main className="main">
      <GetStarted />
      <StaySafe />
      <Experts />
      <Healthcare />
    </main>
  );
}
