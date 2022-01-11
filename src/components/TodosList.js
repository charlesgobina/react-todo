import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return(
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem 
            handleChangeProps={this.props.handleChangeProps} 
            key={todo.id} 
            todo={todo}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList