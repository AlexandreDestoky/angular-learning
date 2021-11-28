import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  // }

  affiche(form: NgForm) {
    console.log(form.value)
  }
}
