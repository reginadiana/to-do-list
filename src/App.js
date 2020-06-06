import React from 'react'

import { Header } from './components/header/index'
import { Section } from './components/section/index'
import Footer from './components/Footer/index'
import AddTodo from './containers/AddTodo/index'
import VisibileTodoList from './containers/VisibleTodoList/index'

const App = () => (
  <div>
    <Header />
    <Section />
    <AddTodo />
    <Footer />
    <VisibileTodoList />
  </div>
)

export default App