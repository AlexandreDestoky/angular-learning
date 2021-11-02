import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

  online = true;

  constructor() {}

  ngOnInit(): void {}

  toggleOnline() {
    this.online = !this.online;
  }

  getColor() {
    return this.online ? "green":"red";
  }

}
