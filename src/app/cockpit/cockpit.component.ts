import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {

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

  ServerEvent(name,content) {
        this.addServer.emit({
      serverName: name,
      serverContent: content,
    });
  }

}
