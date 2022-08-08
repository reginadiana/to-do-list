import React from "react";
// import Header from "./components/Header/index";
// import Section from "./components/Section/index";
import Filter from "./components/Filter/index";
import AddTodo from "./containers/AddTodo/index";
import VisibileTodoList from "./containers/VisibleTodoList/index";
import Benefits from './components/Benefits/Benefits';
import Depoiments from './components/Depoiments/Depoiments';
import Newslatter from './components/Newslatter/Newslatter';
import PlayStore from './components/PlayStore/PlayStore';
import Footer from './components/Footer/Footer';
import './styles/global/reset.css';

const App = () => (
  <>
    {/* <Header />
    <Section /> */}
    <AddTodo />
    <Filter />
    <VisibileTodoList />
    <Benefits />
    <Depoiments />
    <Newslatter />
    <PlayStore />
    <Footer />
  </>
);

export default App;
