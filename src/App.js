import React, { Component } from 'react';
// import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
import Container from './components/Container';
import TodoList from './components/TodoList';
// import TodoEditor from './components/TodoEditor';
// import Filter from './components/Filter';
// import Form from './components/Form';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };


  
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    
    return (
      <Container>
        <div>
          <p>Общее кол-во todo: {totalTodoCount}</p>
          <p>Кол-во выполненых: {completedTodoCount}</p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
