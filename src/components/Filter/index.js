import React from "react";
import FilterLink from "../../containers/FilterLink";
import { VisibilityFilters } from "../../actions";
import "./style.css";

const Filter = () => (
  <section className="flex flex-center filter__container">
    <span>Mostrar:</span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todas</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Para Fazer</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Feitas</FilterLink>
  </section>
);

export default Filter;
