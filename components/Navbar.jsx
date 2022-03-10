import style from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={style["nav-container"]}>
      {menuItems.map(({href, text}) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};
