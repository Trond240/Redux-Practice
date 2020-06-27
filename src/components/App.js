import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import ToDoList from '/Users/trondmakonese/mod_3/class_warm_ups/redux-workshop/src/containers/ToDoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
