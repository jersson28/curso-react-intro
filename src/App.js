import logo from './platzi.webp';
import './App.css';
import {TodoFiltro} from './TodoFiltro';
import {TodoCounter} from './TodoCounter';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem'
import React from 'react';

const defaultTodos= [
  {text: 'cortar cebolla', completed: true},
  {text: 'estudiar', completed: false},
  {text: 'salir', completed: false},
  {text: 'maserar', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoFiltro/>

      <TodoList>
      {defaultTodos.map(todo =>{
        return (
          <TodoItem key={todo.text} text={todo.text} />
        )
      })}
        
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}
export default App;
