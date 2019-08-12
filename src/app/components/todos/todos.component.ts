import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'item 1',
        completed: true
      },
      {
        id: 2,
        title: 'item 2',
        completed: true
      },
      {
        id: 3,
        title: 'item 3',
        completed: true,
        description: 'This is item 3 description'
      }
    ];
  }
}
