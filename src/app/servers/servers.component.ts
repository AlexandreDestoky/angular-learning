import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  prenoms = ['jean', 'pierre', 'thomas', 'benoit', 'sarah'];

  constructor() {}

  ngOnInit(): void {}
}
