import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  para = false;
  clickLog = [];

  constructor() {}

  ngOnInit(): void {}
  togglePara() {
    this.para = !this.para;
    let date = new Date(Date.now());
    this.clickLog.push(date.getMinutes() + ":"+date.getSeconds());
    console.log(this.clickLog)

  }
}
