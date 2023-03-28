import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  
  @Input() todo: any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
    // Add initialization logic here
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);

    console.log('Delete button clicked');
  }

}
