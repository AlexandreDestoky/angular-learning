import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() liste;
  @Output() todo = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  deleteTodo(i:number) {
    console.log("s")
    this.todo.emit(i);
  }

}
