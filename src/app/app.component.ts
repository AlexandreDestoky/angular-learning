import { Component, OnInit, ViewChild } from '@angular/core';
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

  affiche() {
    console.log(this.ValeurForm.value)
  }
  // affiche(form: NgForm) {
  //   console.log(form.value)
  // }
  @ViewChild("formulaire") ValeurForm;
}
