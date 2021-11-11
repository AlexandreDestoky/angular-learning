import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output() addServer = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() addBluePrint = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}
  // ServerEvent() {
  //   this.addServer.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  //   this.clearInput();
  // }
  // BlueprintEvent() {
  //   this.addBluePrint.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  //   this.clearInput();
  ServerEvent(name,content) {
        this.addServer.emit({
      serverName: name,
      serverContent: content,
    });
  }
  
  clearInput(input1,input2) {
    input1.value = "";
    input2.value = "";
  }
}
