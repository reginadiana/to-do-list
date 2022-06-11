import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/*Aqui as tarefas serão listadas e marcadas se foram completadas ou não*/
const Todo = ({ onClick, completed, text }) => (
  <>
    <li
      onClick={onClick}
      className="li-todo"
      style={{
        backgroundColor: completed ? "#db7093" : "rgb(242,242,242)",
        color: completed ? "white" : "gray",
      }}
    >
      {text.toUpperCase()}
    </li>
  </>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
