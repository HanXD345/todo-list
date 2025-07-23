// list.js --> implement todo list functionality

import { ToDoItem } from './item.js';

export class ToDoList {
    #list;

    constructor() {
        this.#list = [];
    }

    addToList(title, description, dueDate, priority) {
        this.#list.push(new ToDoItem(title, description, dueDate, priority));
        console.log(this.#list);
    }
}