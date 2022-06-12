import React, { useState, useEffect } from "react";
import mockTasks from '../../mock/tasks.json';
import { addTodo } from "../../actions";
import { connect } from "react-redux";
import "./style.css";

const AddTodo = ({ dispatch }) => {
  const initialState = "";
  const [input, setInput] = useState(initialState);

  useEffect(() => {
    mockTasks.forEach((task) => {
      dispatch(addTodo(task.text));
    });
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput(initialState);
  };

  return (
    <section className="flex add__todo">
      <h1 className="add__todo__title">Do you want to create a new task?</h1>
      <form className="flex add__todo__form" onSubmit={handleSubmit}>
        <input
          className="add__todo__input"
          type="text"
          placeholder="Add new task here ..."
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />

        <button className="add__todo__submit">Add New Task</button>
      </form>
    </section>
  );
};

export default connect()(AddTodo);
