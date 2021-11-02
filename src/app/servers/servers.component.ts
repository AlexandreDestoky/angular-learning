import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  valInput = 'Jean';

  constructor() {}

  ngOnInit(): void {}

  onUpdateServerName(e) {
    this.valInput = (<HTMLInputElement>e.target).value;
  }
}
