import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import "./style.css";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="add-todo-div">
      <h1>Do you want to create a new task?</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input className="input-todo" ref={(node) => (input = node)} />
        <br />
        <button className="button-todo" type="submit">
          Add New Task
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
