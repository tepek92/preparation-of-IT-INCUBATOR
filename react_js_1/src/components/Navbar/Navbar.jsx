import s from "./Navbar.module.css";
import LinkBar from "./Linkbar/Linkbar";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <LinkBar path="/profile" text="Profile" />
      <LinkBar path="/dialogs" text="Messages" />
      <LinkBar path="/news" text="News" />
      <LinkBar path="/music" text="Music" />
      <LinkBar path="/settings" text="Settings" />
    </nav>
  );
};

export default Navbar;
