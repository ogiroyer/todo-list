import './styles.css';
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList=new TodoList();
//todoList.todos.forEach(todo=>crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);
const newTodo=new Todo('Aprender javascript');
// const tarea= new Todo('Aprender javascript');

// todoList.nuevoTodo(tarea);
// crearTodoHtml(tarea);
//console.log(todoList); 
