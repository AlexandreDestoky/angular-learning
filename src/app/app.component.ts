import { Component, OnInit } from '@angular/core';
import { country } from './country.modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  title = 'Template driven forms';

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  affichage(form) {
    console.log(form.value);
    console.log("----");
  }

}


