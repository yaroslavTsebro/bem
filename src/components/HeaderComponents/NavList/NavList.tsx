import { NavLink } from "../NavLink/NavLink";
import "./NavList.scss";

export function NavList() {
  return (
    <ul className="menu__list">
      <NavLink name="HOME" href="#main" />
      <NavLink name="FEATURES" href="#main" />
      <NavLink name="SUPPORT" href="#main" />
      <NavLink name="CONTACT US" href="#main" />
    </ul>
  );
}
