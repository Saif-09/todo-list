import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : Todo[];

  constructor() {
    this.todos = [
      {
        sno:1,
        title: 'List 1',
        desc: "This is description of To-dolist",
        active: true
      },
      {
        sno:2,
        title: 'List 2',
        desc: "This is description of To-dolist",
        active: true
      },
      {
        sno:3,
        title: 'List 2',
        desc: "This is description of To-dolist",
        active: true
      }
    ]
  }

  ngOnInit(): void {
    // Add initialization logic here
  }

}
