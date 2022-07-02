import React from 'react';
import s from "./Navbar.module.css";
import LinkBar from "./Linkbar/Linkbar";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <LinkBar path="/profile" text="Profile" />
        <LinkBar path="/users" text="Users" />
        <LinkBar path="/dialogs" text="Messages" />
        <LinkBar path="/news" text="News" />
        <LinkBar path="/music" text="Music" />
      </div>
      <div className={s.setting}>
        <LinkBar path="/settings" text="Settings" />
      </div>
      <div className={s.friends}>
      <LinkBar path="/topfriends" text="TOP Friends" />
      <img src="https://shutnikov.club/wp-content/uploads/2020/01/1_PiHoomzwh9Plr9_GA26JcA.png" alt="" />
      <img src="https://shutnikov.club/wp-content/uploads/2020/01/mschropp_avatar-300x300.png" alt="" />
      <img src="https://i1.photo.2gis.com/images/profile/30258560049350742_9a4a.jpg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
