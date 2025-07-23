// index.js --> implement DOM manipulation

import { ToDoList } from './list.js';

let id = 0;

const incrementId = () => id++;

const list = new ToDoList();

list.addToList('name', 'description', 'dueDate', 'priority', id);
incrementId();
console.log(list.showList);
list.addToList('name2', 'description2', 'dueDate2', 'priority2', id);
incrementId();
console.log(list.showList);
list.removeFromList(0);
list.addToList('name3', 'description3', 'dueDate3', 'priority3', id);
console.log(list.showList);