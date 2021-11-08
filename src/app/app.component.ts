import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task :string = "";
  taskList : string[]= [];
  addTodo(e:Event) {
    console.log("lll")
    e.preventDefault();
    if(this.task === "") return ;
    this.taskList.push(this.task);
    this.task = "";
  }
  onDelete(i) {
    console.log(i);

    this.taskList.splice(i,1);
  }
}
