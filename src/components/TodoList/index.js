import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo/index";
import "./style.css";
import ImgDunout from "../../assets/dunout.png";

/* Aqui temos a lista completa de tarefas */
const TodoList = ({ todos, toggleTodo }) => (
  <section className="flex flex-center todo__list">
    <div className="flex flex-center">
      <h2 className="todo__list__subtitle">Lista de tarefas</h2>
      <img
        src={ImgDunout}
        className="todo__list__dunout"
        alt="Rosquinha"
        width="50"
        height="50"
      />
    </div>
    <ul className="todo__list__ul">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  </section>
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
