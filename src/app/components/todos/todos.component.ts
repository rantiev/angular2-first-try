import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  newToDo = {
    title: null,
    completed: false,
  }

  toDoList = [
    {
      title: 'Task #1',
      completed: false,
    },
    {
      title: 'Task #2',
      completed: false,
    },
    {
      title: 'Task #3',
      completed: false,
    },
  ]

  completedList = []
  hasNotArchivedCompleted = false

  complete (item) {
    item.completed = !item.completed;

    this.hasNotArchivedCompleted = this.toDoList.some(x => x.completed)
  }

  archiveCompleted() {
    let completedItems = this.toDoList.filter(item => item.completed)

    this.completedList = this.completedList.concat(completedItems);

    this.toDoList = this.toDoList.filter(item => !item.completed)

    this.hasNotArchivedCompleted = false
  }

  unarchive (item) {
    item.completed = !item.completed;

    this.completedList = this.completedList.filter(_item => _item !== item)
    this.toDoList = this.toDoList.concat(item);
  }

  addToDo () {
    if (this.toDoList.indexOf(this.newToDo) === -1 &&
      this.completedList.indexOf(this.newToDo) === -1) {
      this.toDoList = this.toDoList.concat(this.newToDo)
    }

    this.newToDo = {
      title: null,
      completed: false,
    }
  }

  edit (item) {
    this.newToDo = item;
  }

}
