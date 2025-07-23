// list.js --> implement todo list functionality

import { ToDoItem } from './item.js';

export class ToDoList {
    #list;

    constructor() {
        this.#list = [];
    }

    get showList() {
        return this.#list;
    }

    addToList(title, description, dueDate, priority, id) {
        this.#list.push(new ToDoItem(title, description, dueDate, priority, id));
    }

    removeFromList(id) {
        this.#list = this.#list.filter((item) => item.id !== id);
    }
}