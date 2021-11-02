import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {

  btnClick = false;

  constructor() {}

  ngOnInit(): void {}
  btnCliquer() {
    this.btnClick =true;
  }

}
