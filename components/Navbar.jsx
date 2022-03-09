import style from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  return (
    <nav className={style["nav-container"]}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
};
