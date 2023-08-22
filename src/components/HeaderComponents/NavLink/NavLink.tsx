import "./NavLink.scss"

interface LinkProps {
  name: string;
  href: string;
}

export function NavLink(props: LinkProps) {
  return (
    <li className="menu__item">
      <a href={props.href} className="menu__link">
        {props.name}
      </a>
    </li>
  );
}
