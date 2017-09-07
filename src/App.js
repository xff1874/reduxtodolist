import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibileTodoList from "./containers/VisibleTodoList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibileTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;