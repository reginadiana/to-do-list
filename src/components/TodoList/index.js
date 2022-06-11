import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo/index";
import "./style.css";
import rosquinha from "../../assets/rosquinha.png";

/*Aqui temos a lista completa de tarefas*/
const TodoList = ({ todos, toggleTodo }) => (
  <ul className="table-list">
    <h2 className="h2-todo">
      List of Tasks{" "}
      <img src={rosquinha} className="rosquinha" alt="Rosquinha" />{" "}
    </h2>

    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
