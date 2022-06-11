import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const BtnFilter = ({ children, onClick }) => (
  <button onClick={onClick} className="btn-filter">
    {children}
  </button>
);

BtnFilter.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BtnFilter;
