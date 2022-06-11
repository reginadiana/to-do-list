import React from "react";
import ImgHomerRun from "../../assets/homer/run.png";
import "./style.css";

const Section = () => {
  return (
    <section className="section__container">
      <h1 className="section__title">
        Homer is a person very disorganized.
        <br /> Help him to list your tasks and
        <br /> to check if are done.
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
