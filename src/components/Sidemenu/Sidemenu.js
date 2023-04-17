import React from "react";
import { SidemenuStyle } from "./Sidemenu.style";

export const Sidemenu = () => {
  return (
    <SidemenuStyle>
      <ul>
        <li>
          <a href="#education">Istruzione</a>
        </li>
        <li>
          <a href="#professions">Esperienze professionali</a>
        </li>
        <li>
          <a href="#languages">Conoscenza lingue</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </SidemenuStyle>
  );
};
