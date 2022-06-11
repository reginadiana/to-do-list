import React from "react";
import FilterLink from "../../containers/FilterLink";
import { VisibilityFilters } from "../../actions";
import "./style.css";

const Footer = () => (
  <div className="div-footer">
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done</FilterLink>
  </div>
);

export default Footer;
