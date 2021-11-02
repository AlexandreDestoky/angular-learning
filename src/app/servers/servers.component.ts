import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  valInput = 'Jean';
  status = "Aucun évenement"

  constructor() {}

  ngOnInit(): void {}

  onUpdateServerName(e:Event) {
    this.valInput = (<HTMLInputElement>e.target).value;
  }
  onCreation() {
    this.status= "Evenement créer, avec le texte : " + this.valInput;
  }
}
