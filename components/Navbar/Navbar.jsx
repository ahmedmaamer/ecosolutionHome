import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItems";
const log= new URL("./logo.png",import.meta.url); 
const MENU_LIST = [
  { text: "Acceuil", href: "/" },
  { text: "Articles", href: "/Articles" },
  { text: "Services", href: "/Services" },
  { text: "Projets réferents", href: "/Projets" },
  { text: "Contact", href: "/Contact" },
  { text: "Formulaire de devis ", href: "/Formulaire" },

];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <div className="logo">
           
        <Link href={"/"}>
        <img src={log} width="100"></img>  
         
        </Link>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              className="items"
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;