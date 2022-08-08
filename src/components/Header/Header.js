import React from "react";
import ImgHomerSky from "../../assets/homer/sky.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header__container">
      <h1 className="header__title">
        Lista de Tarefas do <span>Homer</span>
      </h1>
      <img
        draggable="false"
        src={ImgHomerSky}
        className="header__background"
        alt="Homer nas núvens com uma rosquinha"
      />
    </header>
  );
}

export default Header;
