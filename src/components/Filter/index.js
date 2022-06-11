import React from "react";
import FilterLink from "../../containers/FilterLink";
import { VisibilityFilters } from "../../actions";
import "./style.css";

const Filter = () => (
  <section className="flex flex-center filter__container">
    <span>Show:</span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done</FilterLink>
  </section>
);

export default Filter;
