import React from "react";
import Header from "./components/Header/index";
import Section from "./components/Section/index";
import Filter from "./components/Filter/index";
import AddTodo from "./containers/AddTodo/index";
import VisibileTodoList from "./containers/VisibleTodoList/index";
import './App.css'

const App = () => (
  <>
    <Header />
    <Section />
    <AddTodo />
    <Filter />
    <VisibileTodoList />
  </>
);

export default App;
