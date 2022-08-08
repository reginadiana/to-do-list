import React from "react";
import ImgHomerRun from "../../assets/homer/run.png";
import "./style.css";

const Section = () => {
  return (
    <section className="section__container">
      <h1 className="section__title">
        Homer é uma pessoa muito desorganizada
        <br /> Ajude-o a listar suas tarefas
        <br /> e verificar se estão feitas.
      </h1>
      <img
        draggable="false"
        src={ImgHomerRun}
        className="section__background"
        alt="Homer correndo das tarefas"
      />
    </section>
  );
}

export default Section;
